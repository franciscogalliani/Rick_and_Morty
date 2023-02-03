import { useParams } from "react-router-dom"
import styled from "styled-components"

const Title = styled.h1`
    color: white
`

export default function Detail() {

    let { detailId } = useParams();

    return (
        <div>
            <Title>{`Detail ${detailId}`}</Title>
        </div>
    )
}