const welcome = document.getElementById("welcome-div")
const addMemberForm = document.getElementById("add-member-form")
const bandMembersDiv = document.getElementById("band-members-div")
const memberCardClass = document.getElementsByClassName("member-card")

function renderBandMembers() {
    bandMembers.map(member => {
        const memberDiv = document.createElement("div")
        memberDiv.innerHTML = `
        <img src=${member.image} class="member-pic" alt="${member.name}-pic"/>
        <h5>${member.name}</h5>
        <em>${member.instrument}</em>
        `
        memberDiv.id = `${member.name.split(" ").join("-")}-div`
        memberDiv.className = "member-card";
        bandMembersDiv.appendChild(memberDiv)
    })
}




renderBandMembers();