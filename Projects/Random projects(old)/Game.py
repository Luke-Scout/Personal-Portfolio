import random

# set up the game
print("Welcome to the adventure game!")
score = 0

# list of challenges
challenges = [
  {
    "type": "math",
    "difficulty": 1,
    "generator": lambda: (random.randint(1, 10), random.randint(1, 10), random.choice(["+", "-", "*", "/"])),
    "text": "{0} {2} {1}",
    "evaluator": lambda x, y, op: str(eval(f"{x} {op} {y}"))
  },
  {
    "type": "trivia",
    "difficulty": 2,
    "question": "What is the capital of France?",
    "answer": "Paris"
  },
  {
    "type": "trivia",
    "difficulty": 3,
    "question": "What is the largest planet in the solar system?",
    "answer": "Jupiter"
  },
  {
    "type": "trivia",
    "difficulty": 3,
    "question": "Who was the first President of the United Sytates?",
    "answer": "George Washington"
  },
  {
    "type": "trivia",
    "difficulty": 2,
    "question": "What is the highest mountain in the world?",
    "answer": "Mount Everest"
  },
  {
    "type": "history",
    "difficulty": 4,
    "question": "In what year did the United States declare independence?",
    "answer": "1776"
  },
  {
    "type": "history",
    "difficulty": 5,
    "question": "In what year was the Declaration of Independence signed?",
    "answer": "1776"
  },
]

# the game loop
while True:
  # display the current score
  print("Your current score is:", score)

  # choose a random challenge
  challenge = random.choice(challenges)

  # generate the challenge text and correct response
  if challenge["type"] == "math":
    x, y, op = challenge["generator"]()
    challenge_text = challenge["text"].format(x, y, op)
    correct_response = challenge["evaluator"](x, y, op)
  else:
    challenge_text = challenge["question"]
    correct_response = challenge["answer"]

  # present the player with the challenge
  print(challenge_text)

  # get the player's response
  response = input("> ")

  # check if the response is correct
  if response == correct_response:
    print("Correct!")
    score += challenge["difficulty"]
  else:
    print("Incorrect.")

  # check if the player wants to continue
  continue_playing = input("Would you like to continue playing? (y/n) ")
  if continue_playing != "y":
    break

# the game has ended
print("Thanks for playing!")
print("Your final score was:", score)
