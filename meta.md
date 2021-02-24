# Constructing a Personal Site
### Goals: from conception to achievement
I want to create a personal site — it's gotta be something aesthetically and idealogically cozy to me. However, it also needs to retain presentability and functionality, as it's likely that employers will see this at some point 😅 

- [ ] Terminal-Style Navigations

To create the effect at the top of the site(imitating directory navigation in terminal), I originally used some CSS animations.

```css
#loc {
	color: whitesmoke;
	background-color: rgb(37, 37, 37, 1);
	box-shadow: 0.5em 0 0 0 #fff;
	width: 12ch;
    text-align: center;
	overflow: hidden;
	white-space: nowrap;
	animation: ticker .5s step-end infinite alternate,
		type 2s steps(12, end)
}

@keyframes ticker { 
    50% { 
        box-shadow: 0.5em 0 0 0 rgb(37, 37, 37, 1);
    }
}

@keyframes type {
    0% {
        width: 0;
    }
}
```


- [x] Moving Gradient Backgrounds


- [x] Grayscale particles/fractals/patterns (👀 Porter Robinson + Karma Fields)


- [x] Display Works


