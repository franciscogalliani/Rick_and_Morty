import { Container, List, Item } from "./About-styles/About-styles"

export default function About() {
    return (
        <Container>
            <h1>Sobre mi</h1>
            <p>Mi nombre es Francisco Galliani, tengo 20 años y estoy en camino a convertirme en un Full-Stack Developer</p>
            <h2>Tecnologías</h2>
            <List>
                <Item>HTML y CSS</Item>
                <Item>Javascript</Item>
                <Item>React/Redux</Item>
                <Item>Node/Express.js</Item>
            </List>
            <h2>Tecnologías por aprender</h2>
            <List>
                <Item>MongoDB</Item>
                <Item>MySQL</Item>
                <Item>Remix.js</Item>
            </List>
        </Container>
    )
}