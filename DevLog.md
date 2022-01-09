# Developement Log

## Game Features

*1/6/2022* : 

Finished implementing the game logic, and rendering the game board, handling finished states, and the naive minimax algorithms

Current issues: 
    - Minimax algorithm too slow (runtime is exponential, and chrome dev performance is not ideal);
    - Minimax algorithm has problems (scoring system is too discrete leaving areas of guessing by the algorithm)

Goals: Need to work on optimizations

*1/7/2022*:

Optimization 1: Detail scoring system

- Instead of treating all move performances as discrete values (0, 10, -10 etc), I tuned the scoring system to account for other things such as amount of moves made to reach that certain board position. 
- The farther it would take the reach that position, i.e. the deeper into the search tree we go, the less valuable that move is.
- This way, the AI knows to prioritize moves that could make the algorithm block the player's chances of winning sooner, and win the game faster :).
- This proved to be very effective in the end.

*1/8/2022*

Optimization 2: Alpha-Beta Pruning

- Instead of naively searching through every branch of the tree We can Use alpha beta pruning to eliminate subtrees that won't effect the outcome of certain decisions;
- This will reduce the runtime of the program and increase performance.
- Also worked on several animations including the drop piece animation, but I'm not sure if this is the best approach. I'm still considering using canvas, but it will require alot of refactoring and rewriting of code :(
