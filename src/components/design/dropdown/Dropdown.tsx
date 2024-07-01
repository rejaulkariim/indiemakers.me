import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  createCategory,
  getAllCategories
} from '@/server/modules/category/category.action'
import { ICategory } from '@/server/modules/category/category.types'

import { startTransition, useEffect, useState } from 'react'

type DropdownProps = {
  value?: string
  onChangeHandler?: () => void
}

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [newCategory, setNewCategory] = useState('')

  const handleAddCategory = () => {
    createCategory({
      categoryName: newCategory.trim()
    }).then(category => {
      setCategories(prevState => [...prevState, category])
    })
  }

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories()
      categoryList && setCategories(categoryList as ICategory[])
    }

    getCategories()
  }, [])

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger>
        <SelectValue placeholder='Select category' />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map(category => (
            <SelectItem
              key={category._id}
              value={category._id}
              className='select-item'
            >
              {category.name}
            </SelectItem>
          ))}

        <AlertDialog>
          <AlertDialogTrigger className='p-medium-14 text-primary-500 hover:bg-primary-50 focus:text-primary-500 flex w-full rounded-sm py-3 pl-8'>
            Add new category
          </AlertDialogTrigger>
          <AlertDialogContent className='bg-white'>
            <AlertDialogHeader>
              <AlertDialogTitle>New Category</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  type='text'
                  placeholder='Category name'
                  className='input-field mt-3'
                  onChange={e => setNewCategory(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => startTransition(handleAddCategory)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  )
}

export default Dropdown
