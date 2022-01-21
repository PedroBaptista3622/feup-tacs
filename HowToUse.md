## **How to use**

### **Game**
![](https://i.imgur.com/4rbSn5n.png)

This section shows the map, the player, the enemy and the objective.
It only displays the current state of the game, and can only be changed by running code.

### **Blocks**
![](https://i.imgur.com/L1F3xic.png)

This section is where the process begins. It shows all the available blocks. These can be dragged to the Playground section, in order to instanciate them.


### **Playground**
![](https://i.imgur.com/AHUCgK3.png)

This section holds all the selected blocks, and it is also the place where the user may fill in the parameters that some of the blocks require. Blocks with required parameters are displayed as invalid blocks (with a red border), until the user completes them.


Blocks of type Repeat may hold blocks inside them. In order to add a block to an already placed Repeat, the user must drag it from the Blocks section, and drop it on top of that Repeat block.


Every block placed in this section (even inner ones) has a red X. Clicking it removes the block from the Playground. If the removed block is of type Repeat and it has inner blocks, all get deleted.


### **Code**
![](https://i.imgur.com/A4CAJKs.png)

This section shows the user the result of the blocks they added to the playground. Each block corresponds to a "card". And each "card" contains the code that will be generated. Changes made to blocks or its parameters affect the code displayed in this section.

The number of steps counts the number of statements that the current block configuration (displayed on the Playground section) will generate. This measure may be interpreted as an evaluation. As long as the player reaches the objective, the lowest the score, the better.


### **Buttons**
![](https://i.imgur.com/Rlvhtkk.png)

This section has 3 buttons.

The Reset button, is used to reset the game, as well as to clean the blocks placed in the Playground.

The Run button is used to run the code displayed on the Code section. This button is disabled if any of the blocks placed in the Playground is not valid. Filling in the required parameters of such blocks makes them valid, and unlocks the Run button.

The Optimize button is used to optimize a solution. It is only unlocked once the player reaches the objective.