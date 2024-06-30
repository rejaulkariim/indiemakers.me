'use server'

import { CreateNewsletterParams } from '@/lib/actions/shared.types'
import Newsletter from '@/server/modules/newsletter/newsletter.model'
import { connectToDatabase } from '@/server/mongoose'

export async function createNewsletter(params: CreateNewsletterParams) {
  try {
    await connectToDatabase()

    const { email } = params

    if (!email) {
      return { success: false, message: 'Email is required' }
    }

    const existingEmail = await Newsletter.findOne({ email })

    if (existingEmail) {
      return { success: false, message: 'This email has already been used' }
    }

    await Newsletter.create({ email })

    return {
      status: 201,
      success: true,
      message: 'Thank you for subscribing to our newsletter.'
    }
  } catch (error) {
    return {
      status: 500,
      success: false,
      message: 'Internal server error'
    }
  }
}
