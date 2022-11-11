import { getRequests } from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests()

    const convertRequestToListElement = (request) => {
        
        return `<li>
            ${request.description}
            <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button>
            </li>
        `
    }

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}
