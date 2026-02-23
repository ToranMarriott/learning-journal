import posts from "./posts.js"

const heroSection = document.getElementById('hero-section')
const feedGrid = document.getElementById('feed-grid')


function createHeroHtml(){
    let heroHtml = ``
    posts.forEach(function(post){
        if (post.hero === true) {
            let postTagsList = ``
            post.tags.forEach(function(tag){
                postTagsList += `<li class="indiv-tag">${tag}</li>`
            })
            heroHtml += `
                <div class="hero-block" style="--hero-image: url('${post.image}')">
                    <div class="hero-content">
                        <h2 class="hero-title">${post.title}</h2>
                        <p class="hero-excerpt">${post.excerpt}</p>
                        <ul class="tags">${postTagsList}</ul>
                    </div>
                </div>` 
        }
    })
    if (heroHtml === ``) {
        let postTagsList = ``
        posts[0].tags.forEach(function(tag){
            postTagsList += `<li class="indiv-tag">${tag}</li>`
        })
        heroHtml = `
            <div class="hero-block" style="--hero-image: url('${posts[0].image}')">
                <div class="hero-content">
                    <h2 class="hero-title">${posts[0].title}</h2>
                    <p class="hero-excerpt">${posts[0].excerpt}</p>
                    <ul class="tags">${postTagsList}</ul>
                </div>
            </div>` 
    }
    return heroHtml
}

function renderHeroPost(){
    heroSection.innerHTML = createHeroHtml()
}

function createFeedGridHtml(){
    const gridPosts = posts.filter(post => post.hero === false)
    const gridHtml = gridPosts.map(function(post){
        let postTagsList = ``
        post.tags.forEach(function(tag){
            postTagsList += `<li class="indiv-tag">${tag}</li>`
        })
        return `
            <div class="post-card">
                <img class="post-img" src="${post.image}"></img>
                <div class="post-content">
                    <p class="post-date">${new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    })}</p>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <ul class="tags">${postTagsList}</ul>
                </div>
            </div>`
        }
    ).join('')
    return gridHtml
}

function renderFeedGrid(){
    feedGrid.innerHTML = createFeedGridHtml()
}

renderHeroPost()
renderFeedGrid()