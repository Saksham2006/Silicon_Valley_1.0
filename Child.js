class Child{
    constructor(){
        //Chat, call, video call, order stuff, emergency contact numbers, reminders for checkup
        //GPS Tracker, pay bills/insurance
        this.chat = createButton('Chat');
        this.order = createButton('Orders');
        this.contacts = createButton('Contacts');
        this.settings = createButton('Settings');
        this.reminders = createButton('Reminders');

        this.message = createInput("Message");
        this.videoCall = createButton('Video Call');
        this.voiceCall = createButton('Voice Call');

        this.payOrder = createButton('Order Now');

        this.newContact = createInput('Enter new contact number');
        this.contact1 = createButton('Call');
        this.contact2 = createButton('Call');
        this.contact3 = createButton('Call');
        this.contact4 = createButton('Call');
        this.contact5 = createButton('Call');

        this.newReminder = createButton('New reminder');
        this.reminderRec = createElement('h3');

        this.gps = createButton('GPS');
        this.help = createButton('Help');
    }
    chat(){

    }
    order(){

    }
    contacts(){

    }
    pay(){

    }
    reminders(){
        
    }
    display(){
        this.chat.mousePressed(()=>{
            appState = "chat";
        });
        this.order.mousePressed(()=>{
            appState = "order";
        });
        this.contacts.mousePressed(()=>{
            appState = "contacts";
        });
        this.pay.mousePressed(()=>{
            appState = "pay";
        });
        this.reminders.mousePressed(()=>{
            appState = "reminders";
        });
    }
}