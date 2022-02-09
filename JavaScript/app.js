let users = [];
        const addUser = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let user = {
                id: Date.now(),
                image: document.getElementById('image').file,
                title: document.getElementById('title').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                city: document.getElementById('city').value
            }
            users.push(`<div class="dashbord">
                <div class="card">
                    <div class="imgTag" title="Profile Pic">
                        <img id="image" src="${user.image}" alt="">
                    </div>
                    <div class="text">
                        <h3>${user.title}</h3>
                        <p>${user.email}</p>
                        <p>${user.phone}</p>
                        <p>${user.city}</p>
                        <button id="btn" class="hire-button" title="Edit the Profile">Edit</button>
                    </div>
                </div>
                </div>`);
            document.getElementById('newProfile').innerHTML= users.join("");

            document.querySelector('form').reset();
            localStorage.setItem('MyMovieList', JSON.stringify(users) );
            }
            document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addUser);
            });