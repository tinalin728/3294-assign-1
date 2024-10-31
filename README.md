Project description
For this assignment, I decided to build a homepage for a toy store that sells unique, lovable monster toys. Even though the project is still a work in progress, several key features have already been implemented. Users can browse the selection of monsters (product carousel using slick), mark their favorites, and save them to local storage for easy access on future visits. This functionality provides a more personalized experience for users as they explore the toy store's collection.


To access the project:
- You would require Node.js and npm installed on the computer

- Open the project in vs code and open the terminal
Within the terminal, run the following commands:
1. cd 3292-assign-1 
2. npm install
3. npm run dev

- Click to view the local host url

Challenges Faced:
Initially, breaking down the UI into smaller, manageable pieces felt a bit overwhelming, but I soon realized that this approach made the codebase much more organized and easier to maintain. Thinking about creating components in figma helped a lot. 
Understanding React hooks was another learning curve. At first, i found it challenging to grasp how and when to use them effectively, especially useEffect, so I spent quite some time reviewing the lectures, React doc, and other tutorials online. 

State and prop management was also a BIG part of the learning process. It was tricky at first figuring out how to pass data between components using props, especially when there are multiple component levels. I focused on breaking down my components and sticking to a one way data flow, which helped alot. I also tried reusing the component in different sections to see how the reusability of component actually worked. When I was trying to use the SliderCard component directly on the homepage instead of just inside the ProductSlider component, it wouldnt work because I didnt set up the favorite state on the homepage, but on the product slider page. I learned that lifting state up (to parent component or even higher) was important for sharing data across components.
