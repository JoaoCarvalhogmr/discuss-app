'use client'
import { useSearchParams } from "next/navigation"
import { Input } from "./ui/input"
import * as actions from "@/actions"
import { Search } from "lucide-react"

const SearchInput = () => {
    const searchParams = useSearchParams();

    return (
        <form action={actions.search} className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
                name="term" 
                defaultValue={searchParams.get('term') || ''} 
                placeholder="Search posts..."
                className="pl-8 bg-secondary/50 focus:bg-background transition-colors"
            />
        </form>
    )
}

export default SearchInput