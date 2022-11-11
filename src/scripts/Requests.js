import { getRequests } from "./dataAccess.js"
import { fetchPlumbers } from "./dataAccess.js"
import { getPlumbers } from "./dataAccess.js"
import { saveCompletion } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

export const Requests = () => {
    const requests = getRequests()
    const plumbers = getPlumbers()

    const convertRequestToListElement = (request) => {
        
        return `<li>
            ${request.description}
            <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button>
            <select class="plumbers" id="plumbers">
    <option value="">Choose</option>
    ${
        plumbers.map(
            plumber => {
                return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
            }
        ).join("")
    }
</select>
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

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { requestId , plumberId , date_created: new Date().toDateString() }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            saveCompletion(completion);
        }
    }
)