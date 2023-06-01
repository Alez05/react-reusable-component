import { TColorType, TSizeType, TTextAsType } from '@myorg/type'
import { FormikProps } from 'formik'
import { ReactNode } from 'react'

type label = string
type placeholder = string
type describedby = string
type required = boolean
type type = string

export type TInput = {
  children?: ReactNode
  label?: label
  placeholder?: placeholder
  describedBy?: describedby
  required?: required
  type?: type
  color?: TColorType
  as?: TTextAsType
  size?: TSizeType
  padding?: TSizeType
  name?: string
  field?: {
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  }
  form?: FormikProps<any>
  click?: () => void
}

export type $TInput = {
  as?: TTextAsType
  $size?: TSizeType
  $color?: TColorType
  $padding?: TSizeType
}
