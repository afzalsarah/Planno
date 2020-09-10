export default class Card {
    constructor(id, cname, description, assignee, dDate, st) {
        this.id = id;
        this.cname = cname;
        this.description = description;
        this.assignee = assignee;
        this.dDate = dDate;
        this.st = st;

    }
    htmlString() {
        let html = "";
        html = `<div id ="taskcontainer.t_${this.id+1}" class="card-deck">
                    <div id="cList.t_${this.id}" class="card">
        
                    <div class="card-body">
                        <p>${this.cname}</p>
                        <p>${this.description}</p>
                        <p>${this.assignee}</p>
                        <p>${this.dDate}</p>
                        <p>${this.st}</p>
                        <button class="btnz delete" id="dbutton_${this.id}"> Delete</button>
                        <button class="btnz Edit" id="ebutton_${this.id}"> Update</button>
                    </div>
                    </div>
                </div>`;
        return html;
    }
    toElement(edifunc, delfunc) {
        let htmlElement = this.htmlString(); //assigning function to var
        let element = document.createRange().createContextualFragment(htmlElement);
        element.querySelector("button.Edit").addEventListener("click", edifunc);
        element.querySelector("button.delete").addEventListener("click", delfunc);
        return element;
    }

}