import { useRouter } from 'next/router'
import React from 'react'

interface Props {}

function Index(props: Props) {
    const router = useRouter();
    const {} = props
    const level1 = router.query.level1

    return (
        <h2>This is level 1. Page = {level1}</h2>
    )
}

export default Index
