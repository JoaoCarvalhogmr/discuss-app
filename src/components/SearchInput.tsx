'use client'
import { useSearchParams } from "next/navigation"
import { Input } from "./ui/input"
import * as actions from "@/actions"

const SearchInput = () => {
    const searchParams = useSearchParams();


  return (
    <form action={actions.search}>
        <Input name="term" defaultValue={searchParams.get('term') || ''} />
    </form>
  )
}

export default SearchInput