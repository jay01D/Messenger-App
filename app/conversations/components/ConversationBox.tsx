"use client"
import { Conversation, User, Message } from "@prisma/client"
import { useMemo, useCallback } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { useSession } from "next-auth/react"
import clsx from "clsx"


interface ConversationBoxProps {
    data: Conversation
    selected?: boolean
}

export const ConversationBox = ({
    data,
    selected
}: ConversationBoxProps) => {
    return (
        <div>ConversationBox</div>
    )
}
