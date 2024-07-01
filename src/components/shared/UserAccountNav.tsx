import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { getUserById } from '@/server/modules/user/user.actions'
import { cn } from '@/utils/utils'
import { SignOutButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { LayoutGrid, LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const UserAccountNav = async () => {
  const { userId: clerkId } = auth()

  const mongoUser = await getUserById({ userId: clerkId })
  //   console.log(mongoUser.role !== 'admin', 'mongouser from admin dashboard');

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={mongoUser?.photo}
            height={100}
            width={100}
            alt='user'
            className='h-8 w-8 cursor-pointer rounded-full object-contain focus:ring'
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='mt-4 w-52 rounded-lg bg-card'
          side='bottom'
        >
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <div>
            {mongoUser?.role === 'admin' ? (
              <Link href='/admin/dashboard/'>
                <span
                  className={cn(
                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <LayoutGrid className='mr-2 h-4 w-4 text-muted-foreground' />
                  <span className='text-sm text-muted-foreground'>
                    Dashboard
                  </span>
                </span>
              </Link>
            ) : (
              <Link href='/user/dashboard/profile'>
                <span
                  className={cn(
                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <LayoutGrid className='mr-2 h-4 w-4 text-muted-foreground' />
                  <span className='text-sm text-muted-foreground'>
                    Dashboard
                  </span>
                </span>
              </Link>
            )}
          </div>
          {/* TODO: Implement settings page */}

          {/* <DropdownMenu>
            <Link href="/user/dashboard/settings">
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <Settings className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Settings</span>
              </span>
            </Link>
          </DropdownMenu> */}

          <DropdownMenu>
            <span
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <LogOut className='mr-2 h-4 w-4 text-muted-foreground' />
              <SignOutButton>
                <button className='text-sm text-muted-foreground'>
                  Logout
                </button>
              </SignOutButton>
            </span>
          </DropdownMenu>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default UserAccountNav
