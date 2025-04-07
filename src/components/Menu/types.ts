
import { Dispatch, SetStateAction } from 'react'

export interface MenuProps {
    active: number
    setActive: Dispatch<SetStateAction<number>>
}