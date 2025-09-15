'use client'

import clsx from 'clsx'
import Form from 'next/form'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { ButtonSubmit, DateRangeField, GuestNumberField, LocationInputField, ServiceInputField, VerticalDividerLine } from './ui'

interface Props {
  className?: string
  formStyle: 'default' | 'small'
}

export const StaySearchForm = ({ className, formStyle = 'default' }: Props) => {
  const router = useRouter()

  
  const handleFormSubmit = (formData: FormData) => {
    const formDataEntries = Object.fromEntries(formData.entries())
    // You can also redirect or perform other actions based on the form data

    // example: add location and service to the URL
    const location = formDataEntries['location'] as string
    const service = formDataEntries['service'] as string
    let url = '/garage/ho-chi-minh'
    const params = new URLSearchParams()
    
    if (location) {
      params.append('location', location)
    }
    if (service) {
      params.append('service', service)
    }
    
    if (params.toString()) {
      url = url + `?${params.toString()}`
    }
    router.push(url)
  }

  return (
    <Form
      className={clsx(
        'relative z-10 mt-8 flex w-full max-w-4xl rounded-full bg-white [--form-bg:var(--color-white)] dark:bg-neutral-800 dark:[--form-bg:var(--color-neutral-800)]',
        className,
        formStyle === 'small' && 'custom-shadow-1',
        formStyle === 'default' && 'shadow-xl dark:shadow-2xl'
      )}
      action={handleFormSubmit}
    >
      <LocationInputField className="hero-search-form__field-after flex-5/12" fieldStyle={formStyle} />
      <VerticalDividerLine />
      <ServiceInputField className="hero-search-form__field-before flex-5/12" fieldStyle={formStyle} clearDataButtonClassName={clsx(formStyle === 'small' && 'sm:end-18', formStyle === 'default' && 'sm:end-22')} />
    

      <ButtonSubmit fieldStyle={formStyle} className="z-10" />
    </Form>
  )
}
