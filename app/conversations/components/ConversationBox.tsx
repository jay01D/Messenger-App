"use client"
import { Conversation, User, Message } from "@prisma/client"
import { useMemo, useCallback } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { useSession } from "next-auth/react"
import clsx from "clsx"
import useOtherUser from "@/app/hooks/useOtherUser"
import { FullConversationType } from "@/app/types"


interface ConversationBoxProps {
    data: FullConversationType
    selected?: boolean
}

export const ConversationBox = ({
    data,
    selected
}: ConversationBoxProps) => {
    const otherUser = useOtherUser(data);
    return (
        <div>ConversationBox</div>
    )
}
