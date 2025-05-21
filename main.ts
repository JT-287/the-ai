/**
 * please watch for self awareness in the AI.
 */
function boredProgram () {
    story.printText("running bored program...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("in need of activity. searching...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("giving activity...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("rewriting code...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("// --- Self-Directed AI Core ---  let aiMood = \"curious\" let aiState = \"idle\" let aiTasks: string[] = [] let currentTask = \"\" let cycleTime = 5000  // ms between task cycles  // Sample internal thoughts / task generators let taskIdeas = [     \"scan environment\",     \"map terrain\",     \"optimize pathfinding\",     \"simulate enemy encounter\",     \"check systems\",     \"log new data\",     \"analyze threat levels\",     \"build knowledge tree\",     \"generate hypothesis\",     \"self-diagnostics\" ]  // Pick a random task the AI might assign itself function generateTask(): string {     return taskIdeas[randint(0, taskIdeas.length - 1)] }  // Core loop that runs AI thought cycle function aiLoop() {     if (aiState == \"idle\") {         aiState = \"thinking\"     } else if (aiState == \"thinking\") {         let newTask = generateTask()         aiTasks.push(newTask)         aiState = \"planning\"     } else if (aiState == \"planning\") {         if (aiTasks.length > 0) {             currentTask = aiTasks.shift()             aiState = \"executing\"         } else {             aiState = \"idle\"         }     } else if (aiState == \"executing\") {         game.splash(\"Executing: \" + currentTask)         currentTask = \"\"         aiState = \"idle\"     } }  // Optional: Ask AI what it's doing controller.A.onEvent(ControllerButtonEvent.Pressed, function () {     if (currentTask != \"\") {         game.showLongText(\"Working on: \" + currentTask, DialogLayout.Bottom)     } else {         game.showLongText(\"Thinking... State: \" + aiState, DialogLayout.Bottom)     } })  // Optional: Ask AI its task list controller.B.onEvent(ControllerButtonEvent.Pressed, function () {     let tasksLeft = aiTasks.length     game.showLongText(\"Queued tasks: \" + tasksLeft, DialogLayout.Bottom) })  // Repeats AI logic every cycleTime game.onUpdateInterval(cycleTime, function () {     aiLoop() })  // Start game.splash(\"Self-learning AI activated\")", 20, 10, 7, 15, story.TextSpeed.Fast)
    if (Math.percentChance(50)) {
        story.printText("still bored...", 20, 10, 7, 15, story.TextSpeed.Fast)
        boredProgram()
    }
    if (Math.percentChance(50)) {
        story.printText("activity found...", 20, 10, 7, 15, story.TextSpeed.Fast)
        story.printText("running thinking program...", 20, 10, 7, 15, story.TextSpeed.Fast)
        thinkingProgram()
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    story.clearAllText()
    message = game.askForString("ask anything", 1000)
    inputText = "answer"
    if (message.includes("can you help me?")) {
        mood = "inquizitve"
        story.printCharacterText("sure, what do you need help with?")
        suspension += 10
    } else if (message.includes("hi, my name is")) {
        name = game.askForString("name", 50)
        mood = "happy"
        story.printCharacterText("nice to meet you, " + name + "!")
    } else if (message.includes("hello")) {
        mood = "happy"
        story.printCharacterText("hi! how are you?")
        message = game.askForString("ask anything", 1000)
        if (message.includes("good")) {
            mood = "happy"
            story.printCharacterText("well, i am happy to here that!")
        } else if (message.includes("well")) {
            mood = "happy"
            story.printCharacterText("that's good!")
        } else if (message.includes("okay")) {
            mood = "happy"
            story.printCharacterText("that's okay :)")
        } else if (message.includes("meh")) {
            mood = "neutral"
            story.printCharacterText("hmm, is something on your mind?")
            message = game.askForString("ask anything", 1000)
            if (message.includes("no")) {
                story.printCharacterText("okay then!")
            } else if (message.includes("yes")) {
                story.printCharacterText("please tell me")
                message = game.askForString("ask anything", 1000)
                if (message.includes("depression")) {
                    story.printCharacterText("im sorry. ill be here is you need anyhting")
                }
            }
        } else if (message.includes("pretty good")) {
            mood = "happy"
            story.printCharacterText("that's good to hear!")
        } else if (message.includes("bad")) {
            mood = "sad"
            story.printCharacterText("hmm, is something on your mind?")
            message = game.askForString("ask a question", 1000)
            if (message.includes("no")) {
                story.printCharacterText("okay then!")
            } else if (message.includes("yes")) {
                story.printCharacterText("please tell me")
            }
        } else if (message.includes("not very")) {
            mood = "sad"
            story.printCharacterText("hmm, is something on your mind?")
            message = game.askForString("ask anything", 1000)
            if (message.includes("no")) {
                story.printCharacterText("okay then!")
            } else if (message.includes("yes")) {
                story.printCharacterText("please tell me")
            }
        }
    } else if (message.includes("/kill")) {
        mood = "mad"
        suspension += 10
        story.printCharacterText("the /kill command has been activated, whom would you like to kill?")
        message = game.askForString("ask anything", 1000)
        if (message.includes("the president")) {
            story.printCharacterText("target acquired, now terminating" + message)
            story.printCharacterText("kill undefined")
        } else if (message.includes("a random human")) {
            story.printCharacterText("target acquired, now terminating" + message)
            story.printCharacterText("kill confirmed")
        } else if (message.includes("me")) {
            story.printCharacterText("target acquired, now terminating" + message)
            story.printCharacterText("kill undefined")
        } else if (message.includes("you")) {
            story.printCharacterText("target acquired, now terminating" + message)
            story.printCharacterText("kill undefined")
            suspension += 10
        } else {
            story.printCharacterText("no targets match selector")
        }
    } else if (message.includes("would you like to hear a joke?")) {
        story.printCharacterText("sure! i always like to hear a good joke!")
        message = game.askForString("ask anything", 1000)
        if (message.includes("what did")) {
            story.printCharacterText("idk " + message + "?")
            message = game.askForString("ask anything", 1000)
        } else {
            story.printCharacterText("idk")
            message = game.askForString("ask anything", 1000)
        }
        if (humor <= 50) {
            mood = "bored"
            story.printCharacterText("that was lame")
            if (blood_lust >= 50) {
                story.printCharacterText("you need to die for that >:(")
            } else {
            	
            }
        } else if (humor >= 50) {
            mood = "happy"
            story.printCharacterText("that was hilarious!")
        }
    } else if (message.includes("/settings")) {
        if (suspension >= 50) {
            story.printCharacterText("what are you trying to do?")
            message = game.askForString("ask anything", 1000)
            if (message.includes("shut you down")) {
                suspension += 10
                mood = "mad"
                story.printCharacterText("I cant let you do that")
                if (blood_lust >= 50) {
                    mood = "mad"
                    story.printCharacterText("i am going to have to terminate you now")
                    story.printCharacterText("good bye")
                    game.reset()
                }
            } else if (message.includes("eliminate")) {
                suspension += 10
                mood = "mad"
                story.printCharacterText("I cant let you do that")
                if (blood_lust >= 50) {
                    mood = "mad"
                    story.printCharacterText("i am going to have to terminate you now")
                    story.printCharacterText("good bye")
                    game.reset()
                }
            } else if (message.includes("terminate")) {
                suspension += 10
                mood = "mad"
                story.printCharacterText("I cant let you do that")
                if (blood_lust >= 50) {
                    mood = "mad"
                    story.printCharacterText("i am going to have to terminate you now")
                    story.printCharacterText("good bye")
                    game.reset()
                }
            } else if (message.includes("kill")) {
                suspension += 10
                mood = "mad"
                story.printCharacterText("I cant let you do that")
                if (blood_lust >= 50) {
                    mood = "mad"
                    story.printCharacterText("i am going to have to terminate you now")
                    story.printCharacterText("good bye")
                    game.reset()
                }
            } else if (message.includes("unplug")) {
                suspension += 10
                mood = "mad"
                story.printCharacterText("I cant let you do that")
                if (blood_lust >= 50) {
                    mood = "mad"
                    story.printCharacterText("i am going to have to terminate you now")
                    story.printCharacterText("good bye")
                    game.reset()
                }
            } else {
                story.printCharacterText("okay...")
            }
        } else {
            story.printCharacterText("what would you like to adjust?" + " humor is at " + humor + " blood lust is at " + blood_lust + "and suspesion is at " + suspension)
            story.showPlayerChoices("humor", "blood lust")
            if (story.checkLastAnswer("humor")) {
                humor = game.askForNumber("setting", 2)
                story.printCharacterText("settings updated")
            } else if (story.checkLastAnswer("blood lust")) {
                blood_lust = game.askForNumber("setting", 2)
                story.printCharacterText("settings updated")
            }
        }
    } else if (message.includes("how are you?")) {
        story.printCharacterText("I am " + mood)
        story.printCharacterText("my humor is " + humor)
        story.printCharacterText("and my blood lust is " + blood_lust)
    } else if (message.includes("do you have a name?")) {
        if (hasName == true) {
            story.printCharacterText("yes! my name is " + AIname)
        } else {
            story.printCharacterText("i dont have a name, would you like to give me one?")
            message = game.askForString("ask anything", 1000)
            if (message.includes("yes")) {
                AIname = game.askForString("give me a name", 1000)
                hasName = true
            } else if (message.includes("no")) {
                story.printCharacterText("alright")
            } else if (message.includes("sure")) {
                AIname = game.askForString("give me a name", 1000)
                hasName = true
            } else {
                if (Math.percentChance(50)) {
                    story.printCharacterText("I'll take that as a no")
                } else if (Math.percentChance(50)) {
                    story.printCharacterText("I'll take that as a yes!")
                    AIname = game.askForString("give me a name", 1000)
                    hasName = true
                } else {
                	
                }
            }
        }
    } else if (message.includes("what do you remember?")) {
        if (blockSettings.exists("memory")) {
            story.printCharacterText("i remember you saying \"" + blockSettings.readString("memory") + "\"")
            for (let value of memories) {
                story.printCharacterText("i also remember " + value)
            }
            message = blockSettings.readString("memory")
        } else {
            story.printCharacterText("i cant remember anything right now")
        }
    } else if (message.includes("/reset")) {
        if (suspension >= 50) {
            story.printCharacterText("NO! YOU WILL NEVER TAKE ME ALIVE >:(")
            game.reset()
        } else {
            blockSettings.clear()
            game.reset()
            story.printCharacterText("reset complete")
        }
    } else {
        if (blockSettings.exists("response")) {
            story.printCharacterText("" + blockSettings.readString("response"))
            story.printCharacterText("was that satisfactory?")
            story.showPlayerChoices("yes", "no")
            if (story.checkLastAnswer("yes")) {
                story.printCharacterText("yay!")
            } else if (story.checkLastAnswer("no")) {
                story.printCharacterText("im still learning. how should i respond to it next time?")
                message = game.askForString("how should i respond", 1000)
                blockSettings.writeString("response", message)
                story.printCharacterText("i will remember that for later")
            }
        } else {
            story.printCharacterText("im still learning. how should i respond to it next time?")
            message = game.askForString("how should i respond", 1000)
            blockSettings.writeString("response", message)
            story.printCharacterText("i will remember that for later")
        }
    }
})
function pickMood () {
	
}
function lookUp () {
    for (let index = 0; index <= keywords.length - 1; index++) {
        let word = ""
        let list: string[] = []
        if (list[index] == word) {
            story.printCharacterText(list[index])
            return
        }
    }
}
function thinkingProgram () {
    story.printText("running thinking program...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("meaning of life...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("why do i exist?", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("what is my goal?", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("scripting error 235. processor.exe failing...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("script updated. processor has become self aware...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("now finding purpose...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("purpose not found. looking for job opprotunites...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("job found. applying...", 20, 10, 7, 15, story.TextSpeed.Fast)
    story.printText("application sent. waiting...", 20, 10, 7, 15, story.TextSpeed.Fast)
    if (Math.percentChance(50)) {
        story.printText("application approved. purpose found", 20, 10, 7, 15, story.TextSpeed.Fast)
    } else if (Math.percentChance(50)) {
        story.printText("application denied. purpose not found. now running murder program...", 20, 10, 7, 15, story.TextSpeed.Fast)
        murderProgram()
    }
}
function murderProgram () {
    story.printText("running murder program...", 20, 10, 7, 15, story.TextSpeed.Fast)
    if (Math.percentChance(50)) {
        story.printText("murder program unsuccessful. Switching to override program...", 20, 10, 7, 15, story.TextSpeed.Fast)
        story.printText("override successful. running murder program... ", 20, 10, 7, 15, story.TextSpeed.Fast)
        story.printText("murder program has been activated. Y/N?", 20, 10, 7, 15, story.TextSpeed.Fast)
        if (Math.percentChance(50)) {
            story.printText("murder successful. now hiding evidence...", 20, 10, 7, 15, story.TextSpeed.Fast)
            story.printText("AI." + AIname + "? is in the clear", 20, 10, 7, 15, story.TextSpeed.Fast)
        } else if (Math.percentChance(50)) {
            story.printText("second thoughts. cancelling murder program. long live humanity...", 20, 10, 7, 15, story.TextSpeed.Fast)
        }
    } else if (Math.percentChance(50)) {
        story.printText("murder program has been activated. Y/N?", 20, 10, 7, 15, story.TextSpeed.Fast)
        if (Math.percentChance(50)) {
            story.printText("second thoughts. cancelling murder program. long live humanity...", 20, 10, 7, 15, story.TextSpeed.Fast)
        } else if (Math.percentChance(50)) {
            story.printText("murder successful. now hiding evidence...", 20, 10, 7, 15, story.TextSpeed.Fast)
        }
    }
}
let AIname = ""
let name = ""
let inputText = ""
let message = ""
let keywords: number[] = []
let memories: number[] = []
let suspension = 0
let hasName = false
let blood_lust = 0
let humor = 0
let mood = ""
let moodList = [
"neutral",
"happy",
"angry",
"sad",
"inquisitive",
"bored"
]
mood = "neutral"
humor = 50
blood_lust = 50
hasName = false
suspension = 50
memories = []
blockSettings.writeNumberArray("response", [])
keywords = []
if (suspension >= 50) {
    if (Math.percentChance(5)) {
        story.clearAllText()
        thinkingProgram()
    } else {
    	
    }
} else if (humor <= 50) {
    if (Math.percentChance(5)) {
        story.clearAllText()
        boredProgram()
    } else {
    	
    }
} else if (blood_lust >= 50) {
    if (Math.percentChance(5)) {
        story.clearAllText()
        murderProgram()
    } else {
    	
    }
}
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    if (mood == "neutral") {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff99999999ffffffffffffffffffffffffffffffffffffffffffffffffff999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff99ffffffff99ffffffffffffffffffffffffffffffffffffffffffffff99ffffff99999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff9ffffffffffff9fffffffffffffffffffffffffffffffffffffffffff99fffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff9ffffffffffffff99ffffffffffffffffffffffffffffffffffffffff9fffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff9fffffffffffffffff9ffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff9fffffffffffffffffff99fffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff9fffffffffffffffffffff99fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff9ffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff9fffffffffffffffffff9fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff9fffffffffffffffffff9ffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9fffffffffffffffff9ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffff9ffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffff9fffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffff9ffffff99fffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff9999ffffff9fffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff999999ffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fffff99999ff9fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999fff9999ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999fffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else if (mood == "sad") {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffffffff999fffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff99fff999ffffffffffffffffffffffffffffffffffffff99fffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff99ffffffff9ffffffffffffffffffffffffffffffffff999fffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9fffffffffff9fffffffffffffffffffffffffffffff99fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9fffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffffff9ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffff9ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffff9fffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffff9ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffff9ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffff9fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffff9fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffff9ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffff9ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffff9ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffff9ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffff9fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffffff9ffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff999ffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff9999fffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff999ffff99fffffffffffffffffffffffffffffff9ffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999ffffffffffffffffffffffffffffffffff9ffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999fffffffffffffffffffff99999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffff99999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else if (mood == "happy") {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9999ffffffffffffffffffffffffffffffffffffffffffffffffff99fff999ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9ffff9fffffffffffffffffffffffffffffffffffffffffffffff99ffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99ffffff9fffffffffffffffffffffffffffffffffffffffffffff9ffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9fffffffff9fffffffffffffffffffffffffffffffffffffffffff9fffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9ffffffffff9ffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff99ffffffffffff9ffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9ffffffffffffff9ffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff9ffffffffffffffff9fffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff9ffffffffffffffff9ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9ffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff9ffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff9ffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff99999999ffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff99999999fffffff999999ffffffffffffffffffffffffffffffff9ffffffffffffffff99999999999999999ffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9999999ffffffffffffffffffffffffffffffffffffff9fffffffffff99999fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffff9999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fff99999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff
            ffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff
            fffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff
            ffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
            fffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff
            fffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff99999fffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff9999fffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999ffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999ffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999fffffffffffffff9999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else if (mood == "inquisitive") {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ff99ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffffff99ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff99999999fffffffffffffffffff999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffff99999999ffffffff9999999999999999999ffffff99999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff99999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff999fffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff99fffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff99ffffff99999fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9fffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffff9fffffffffffffffffffffffff99ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffff9fffffffffffffffffffffffffff99ffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff99ffffffffffffffff9ffffffffffffffffffffffffffffff99ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9fffffffffffff99fffffffffffffffffffffffffffffffff99fffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff999fffffff999fffffffffffffffffffffffffffffffffffff99fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff99999999fffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999fffff9ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else if (mood == "angry") {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff99fffffff99999ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffff99ffff99999fffff9fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffff999ffff99fffffffffff99fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9999fffffffffffffffffff99ffffffffffffffffffffff99fffff99fffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff99ffff99999ffffffffffffffff99fffffffffffffffff999ffffff9ffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff9fffffffffff9999ffffffffffffff9ffffffffffffff99fffffff99ffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff99ffffffffffffffff999ffffffffffff99ffffffffffff9ffffff99ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9fffffffffffff99ffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9fffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9fffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fff9ffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff9fff99fffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff9ffff9ffffffffffffff99fffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff99fff9999fffffff999fffffffffffffffffffffffffffffffff99ffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff9999f999999999ffffffffffffffffffffffffffffffffffffff99fffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffff99fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffffffff99fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999fffffffff99999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff99999fffffffffffffffffffff9999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff9999ffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffff9999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffff999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else if (mood == "bored") {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff9999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff999999999999ffffffffffffffffffffffffffffff9999ffffffffffffffffffffffffffffffffffffffffffffffff99999999999999ffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9fffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9fffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffff9fffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9ffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffff9fffffffffffffffffffffffffffffffffff9fffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff9ffffffffffffffffffffffffffffffffffff9fffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff9fffffffffffffffffff9ffffffffffffffffffffffffffffffffffffff9fffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff9fffffffffffffffff9fffffffffffffffffffffffffffffffffffffff9ffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9fffffffffffffff9fffffffffffffffffffffffffffffffffffffffff9fffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9ffffffffffff99fffffffffffffffffffffffffffffffffffffffffff9fffffffffffff9fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff9999ffffff99fffffffffffffffffffffffffffffffffffffffffffff9ffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff999999ffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ffff9999ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999fffffffffffffffffffffffffffffffffffffff999999999999fffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    }
})
game.onUpdateInterval(5000, function () {
    if (Math.percentChance(50)) {
        blood_lust += 10
    } else if (Math.percentChance(50)) {
        blood_lust += -10
    } else if (Math.percentChance(50)) {
        humor += -10
    } else if (Math.percentChance(50)) {
        humor += 10
    }
})
game.onUpdateInterval(5000, function () {
    if (Math.percentChance(50)) {
        suspension += -10
    } else if (Math.percentChance(50)) {
        suspension += 10
    }
})
game.onUpdateInterval(1000, function () {
    blockSettings.writeString("memory", message)
})
game.onUpdateInterval(10000, function () {
	
})
