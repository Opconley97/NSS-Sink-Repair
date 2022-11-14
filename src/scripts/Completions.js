import { getPlumbers , getRequests , getCompletions , fetchPlumbers } from "./dataAccess.js";

/*How do I make this cleaner, and how do I get all completed requests to show up?
It's only doing one iteration then stopping.*/

const filterCompletions = (complete) => {

    const plumbers = getPlumbers();
    const requests = getRequests();

    const foundPlumber = plumbers.find(
        (plumber) => {
            if (plumber.id === parseInt(complete.plumberId)) {
                return complete.plumberName = plumber.name
            }
        }
    )


    const foundRequest = requests.find(
        (request) => {
            if (request.id === parseInt(complete.requestId)) {
                return complete.description = request.description
            }
        }
    )

    return `<li>
        ${complete.description} was completed by ${complete.plumberName}
        </li>`
}


export const Completions = () => {
    const completed = getCompletions();
    let html = "<ul>"
    const completedItems = completed.map(filterCompletions)
    html += completedItems.join("")
    html += "</ul>"
    return html
}