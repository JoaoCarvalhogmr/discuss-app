'use client'

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import { Label } from "../ui/label"
import FormButton from "../common/FormButton"
import * as actions from "../../actions"
import { useActionState, startTransition } from "react"
import { Textarea } from "../ui/textarea"

const formErrorStyle = "border border-red-400 bg-red-200 rounded"

interface PostCreateFormProps {
    slug: string
}

const PostCreateForm = ({slug} : PostCreateFormProps) => {
    const [formState, action, isPending] = useActionState(actions.createPost.bind(null, slug), {errors: {}});
    


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        startTransition(() => {
            action(formData)
        })
    }

  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-500">Create a post</Button>
        </PopoverTrigger>
        <PopoverContent side="left" className="mr-3 -mt-4">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 p-4 w-60">
                    <div className="grid w-full gap-1.5">
                        <Label className="font-bold">Title</Label>
                        <Input name="title" placeholder="Title" type="text" className={formState.errors.title && formErrorStyle} />
                        {formState.errors.title ? <div className="text-red-600 font-semibold">{formState.errors.title.join(', ')}</div> : null}
                    </div>
                    <div className="grid w-full gap-1.5">
                        <Label className="font-bold" htmlFor="description">Content</Label>
                        <Textarea name="content" placeholder="Content" className={formState.errors.content && formErrorStyle} />
                        {formState.errors.content ? <div className="text-red-600 font-semibold">{formState.errors.content.join(', ')}</div> : null}
                    </div>
                    {
                    formState.errors._form ? (<div className="rounded p-2 bg-red-200 border border-red-400">
                    {formState.errors._form ?.join(', ')}
                </div>) : null
                    }

                    <FormButton isLoading={isPending} >
                         Create post
                    </FormButton>
                </div>
            </form>
        </PopoverContent>
    </Popover>
  )
}

export default PostCreateForm