const welcome = document.getElementById("welcome-div")
const addMemberForm = document.getElementById("add-member-form")
const bandMembersDiv = document.getElementById("band-members-div")
const memberCardClass = document.getElementsByClassName("member-card")


// addMemberForm.addEventListener("submit", handleSubmit)

// practice creating a form and adding lines

// function handleSubmit(event) {
//     event.preventDefault()
//     const e = event.target
//     const name = e.name.value
//     const instruments = e.instruments.value

//     membersContainer.innerHTML += `
//     <li>
//         ${name} - ${instruments}
//     </li>
//     `
//     e.reset()
// }

function renderBandMembers() {
    bandMembers.map(member => {
        const memberDiv = document.createElement("div")
        memberDiv.innerHTML = `
        <h5>${member.name}</h5>
        <em>${member.instrument}</em>
        `
        memberDiv.id = `${member.name.split(" ").join("-")}-div`
        memberDiv.className = "member-card";
        bandMembersDiv.appendChild(memberDiv)
    })
}




renderBandMembers();