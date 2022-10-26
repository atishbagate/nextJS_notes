import { useRouter } from 'next/router'
import React from 'react'

interface Props {}

function Index(props: Props) {
    const router = useRouter();
    const {} = props
    const {level1, level2} = router.query;

    return (
        <h2>This is Level 2 Page and parameters are -> level-1 => {level1} and level 2 => {level2}</h2>
    )
}

export default Index
