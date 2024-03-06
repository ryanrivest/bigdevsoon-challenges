export const contacts: Record<string, Contact> = {
  robert: {
    name: 'William Flickerman',
    image: '/images/challenges/messages/robert.png',
    online: true,
  },
  amy: {
    name: 'Amy Lee',
    image: '/images/challenges/messages/amy.png',
    online: true,
  },
  lois: {
    name: 'Lois Goodman',
    image: '/images/challenges/messages/lois.png',
    online: false,
  },
  bill: {
    name: 'Bill Smith',
    image: '/images/challenges/messages/bill.png',
    online: false,
  },
  monica: {
    name: 'Monica Johnson',
    image: '/images/challenges/messages/monica.png',
    online: true,
  },
  maria: {
    name: 'Maria Houk',
    image: '/images/challenges/messages/maria.png',
    online: false,
  },
  joshua: {
    name: 'Joshua Simpson',
    image: '/images/challenges/messages/joshua.png',
    online: false,
  },
  ben: {
    name: 'Ben Sanders',
    image: '/images/challenges/messages/ben.png',
    online: false,
  },
  katie: {
    name: 'Katie Anderson',
    image: '/images/challenges/messages/katie.png',
    online: true,
  },
  nelson: {
    name: 'Nelson Hwang',
    image: '/images/challenges/messages/nelson.png',
    online: true,
  },
};

export const favoriteContacts = [
  contacts.robert,
  contacts.amy,
  contacts.lois,
  contacts.bill,
  contacts.monica,
  contacts.ben,
  contacts.maria,
  contacts.nelson,
  contacts.joshua,
];

export const conversations: Conversation[] = [
  {
    contact: contacts.amy,
    messages: [
      {
        content: 'Are you free tomorrow?',
        time: '12:29 PM',
        self: true,
      },
      {
        content: 'I will be there at 10:00 AM.',
        time: '12:30 PM',
        self: false,
      },
      {
        content: 'Sounds good. See you tomorrow!',
        time: '12:32 PM',
        self: true,
      },
    ],
  },
  {
    contact: contacts.joshua,
    messages: [
      {
        content: 'I am thinking of going to the beach this weekend.',
        time: '11:15 AM',
        self: true,
      },
      {
        content: 'That sounds like a great idea!',
        time: '11:16 AM',
        self: false,
      },
      {
        content: 'I will let you know if I decide to go.',
        time: '11:17 AM',
        self: true,
      },
    ],
  },
  {
    contact: contacts.nelson,
    messages: [
      {
        content: 'Ok, got it! Thanks for the update.',
        time: '11 Feb AM',
        self: true,
      },
    ],
  },
  {
    contact: contacts.maria,
    messages: [
      {
        content: 'Did you hear about the new movie coming out next week?',
        time: '9 Feb',
        self: false,
      },
    ],
  },
  {
    contact: contacts.katie,
    messages: [
      {
        content: `Hey there! How's your day going?`,
        time: '8 Feb',
        self: false,
      },
    ],
  },
  {
    contact: contacts.ben,
    messages: [
      {
        content: 'Thinking of planning a trip for the summer. Any suggestions?',
        time: '6 Feb',
        self: true,
      },
    ],
  },
  {
    contact: contacts.monica,
    messages: [
      {
        content: 'Wow, that sounds amazing!',
        time: '6 Feb',
        self: true,
      },
    ],
  },
  {
    contact: contacts.robert,
    messages: [
      {
        content: 'Hey, let me know if you need any help with the project.',
        time: '15 Jan',
        self: false,
      },
    ],
  },
];

export interface Contact {
  name: string;
  image: string;
  online: boolean;
}

export interface Conversation {
  contact: Contact;
  messages: Message[];
}

export interface ConversationPreview {
  contact: Contact;
  messages: Message[];
  lastMessage: Message;
}

export interface Message {
  content: string;
  time: string;
  self: boolean;
}
