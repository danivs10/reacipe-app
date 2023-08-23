'use client'

import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from '@nextui-org/react'
import { IconMessageCircle2, IconHeart, IconBookmark } from '@tabler/icons-react'

export default function postCard ({
  userFullName,
  userName,
  avatarUrl,
  content
}: {
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
}) {
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={avatarUrl} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <IconMessageCircle2 className='w-4 h-4'/>
        <IconHeart className='w-4 h-4'/>
        <IconBookmark className='w-4 h-4'/>
      </CardFooter>
    </Card>
  )
}
