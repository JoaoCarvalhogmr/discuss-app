'use client'

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import FormButton from "../common/FormButton"
import * as actions from "../../actions"
import { useActionState, startTransition } from "react"

const formErrorStyle = "border border-red-400 bg-red-200 rounded"

const TopicCreateForm = () => {
    const [formState, action, isPending] = useActionState(actions.createTopic, {errors: {}});

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
            <Button className="bg-blue-600 hover:bg-blue-500">Create a topic</Button>
        </PopoverTrigger>
        <PopoverContent side="left" className="mr-3 -mt-4">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 p-2 w-60">
                    <div className="grid w-full gap-1.5">
                        <Label className="font-bold">Name</Label>
                        <Input name="name" placeholder="Name" type="text" className={formState.errors.name && formErrorStyle} />
                        {formState.errors.name ? <div className="text-red-600 font-semibold">{formState.errors.name.join(', ')}</div> : null}
                    </div>
                    <div className="grid w-full gap-1.5">
                        <Label className="font-bold" htmlFor="description">Your message</Label>
                        <Textarea name="description" placeholder="Describe your topic" id="description" className={formState.errors.description && formErrorStyle} />
                        {formState.errors.description ? <div className="text-red-600 font-semibold">{formState.errors.description.join(', ')}</div> : null}
                    </div>
                    {formState.errors._form ?.join(', ')}
                    <FormButton isLoading={isPending}>
                         Submit
                    </FormButton>
                </div>
            </form>
        </PopoverContent>
    </Popover>
  )
}

export default TopicCreateForm