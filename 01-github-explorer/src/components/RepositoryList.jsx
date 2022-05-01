import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "Uniform 1",
    description: "Form in React",
    link: "https://github.com/emimuniz/CursoReactRockeseat"

}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem/>
            </ul>
        </section>
    )
}