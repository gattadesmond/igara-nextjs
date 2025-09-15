'use client'

import T from '@/utils/getT'
import Form from 'next/form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import FieldPanelContainer from '../FieldPanelContainer'
import LocationInput from '../LocationInput'
import ServiceInput from '../ServiceInput'
import ButtonPrimary from '@/shared/ButtonPrimary'

const StaySearchFormMobile = () => {
  //
  const [fieldNameShow, setFieldNameShow] = useState<'location' | 'service'>('location')
  //
  const [locationInputTo, setLocationInputTo] = useState('')
  const [serviceInput, setServiceInput] = useState('')
  const router = useRouter()

  const handleFormSubmit = (formData: FormData) => {
    const formDataEntries = Object.fromEntries(formData.entries())
    console.log('Form submitted', formDataEntries)
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
    <Form id="form-hero-search-form-mobile" action={handleFormSubmit} className="flex w-full flex-col gap-y-3 p-5">
      {/*  LOCATION */}
      <FieldPanelContainer
        isActive={fieldNameShow === 'location'}
        headingOnClick={() => setFieldNameShow('location')}
        headingTitle="Vị trí"
        headingValue={locationInputTo || "Chọn vị trí"}
      >
        <LocationInput
          defaultValue={locationInputTo}
          onChange={(value) => {
            setLocationInputTo(value)
            // Không tự động chuyển sang field service
            // setFieldNameShow('service')
          }}
        />
      </FieldPanelContainer>

      {/* SERVICE */}
      <FieldPanelContainer
        isActive={fieldNameShow === 'service'}
        headingOnClick={() => setFieldNameShow('service')}
        headingTitle="Dịch vụ"
        headingValue={serviceInput || "Chọn dịch vụ"}
      >
        <ServiceInput
          defaultValue={serviceInput}
          onChange={(value: string) => {
            setServiceInput(value)
          }}
        />
      </FieldPanelContainer>

    </Form>
  )
}

export default StaySearchFormMobile
