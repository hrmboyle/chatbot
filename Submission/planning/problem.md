# Chatbot

## Problem statement

Sometimes we are unsure of what it is we ought to do with our free time.

With this in mind, a chatbot has been created that takes users on an innovative and disruptive journey through a myriad of potential activitiess.

This journey is laced with sharp wit, and has groundbreaking range of outcome. Some even challange the fabric of our collective reality.

This is achieved through humble application of Javascript and HTML.

## Inputs, processes and outputs

INPUTS.

These are going to be what the user types. The input will vary from question to question. From the broadest perception, the answers will be "Yes" or "No"
Appropriate code will need to be added to accomodate for variety in grammatical syntax users will no doubt input.
Effort will be made with each input screen to direct the users to the types of inputs that will render further conversation with the chatbot.

PROCESSES.

Processes are contextualised by the accompanying Excalidraw document. Basically, NO type inputs from the user are the key driver for further chatbot content.
Yes answers imply the users have come to their desired outcome. As a result an 'end' type screen will be shown, this will include data relevant to the question they have answered.

Examples seen in Test scenarios

## Test scenarios

Input: Henry
Output: Are you feeling energised or relaxed?
Input: energised
Output: How about we go for a run? Who knows, maybe you might get a runners high!


[QUESTION 1]
Do you want X? Yes or No? [input: NO].

[PROCESS, GO TO nextQuestion ]

[QUESTION 2]
Okay do you want Y instead? Yes or No? [input: NO]

[PROCESS, GO TO nextQuestion]

[QUESTION 3]

## Allright then, how about Z? Let me know... (the process will continue until yes is yielded, the result of which, can be seen below.)

Whereas, YES type inputs are going to result in a finish type screen that displays information specific to the query that has been agreed upon.

For Example:

[QUESTION 2]

Do you want X? Yes or No? [input: YES].

[PROCESS, GO TO endScreen(question2)]

Great news! Congratulations on choosing, now you can read more about X (hyperlink)here(hyperlink)

--

There is also another outcome to consider, this is the user exhausting all possible outcome and coming to an endScreen.

This endScreen, will let the user know they have come to the end of the conversation. Let's take a look below:

[Question 10]

Wow, you have seen a great deal of options, yet no decision made? Well, how about [variable]?
[input: NO]

[Question 11]

Okay then, I can't help you, as you evidently have chosen to be indecisive at this point in space and time!
No worries though, if you want to take things back to the top, maybe explore some other options, you can simply type yes.

[input: NO (this will result in nothing happening)]

[input: YES]

[Process, go to beginning of chatBot]
