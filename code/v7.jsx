 <g>
                  <g id="project1" 
                     className="cursor-pointer" 
                     onClick={() => {
                       if (activePreview === 1) {
                         const overlay = document.createElement('div');
                         overlay.style.position = 'fixed';
                         overlay.style.bottom = '-100px';
                         overlay.style.left = '-100px';
                         overlay.style.width = '100px';
                         overlay.style.height = '100px';
                         overlay.style.backgroundColor = '#f8f0e2';
                         overlay.style.transform = 'rotate(45deg)';
                         overlay.style.transition = 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
                         overlay.style.zIndex = '9999';
                         document.body.appendChild(overlay);

                         setTimeout(() => {
                           overlay.style.width = '300vw';
                           overlay.style.height = '300vh';
                           overlay.style.bottom = '-50vh';
                           overlay.style.left = '-50vw';
                         }, 50);

                         const rocket = document.createElement('img');
                         rocket.src = '/images/raketje.png';
                         rocket.style.position = 'fixed';
                         rocket.style.bottom = '0';
                         rocket.style.left = '0';
                         rocket.style.width = '150px';
                         rocket.style.height = '150px';
                         rocket.style.transform = 'rotate(48deg)';
                         rocket.style.transition = 'all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000)';
                         rocket.style.zIndex = '10000';
                         document.body.appendChild(rocket);

                         setTimeout(() => {
                           rocket.style.transform = 'translate(calc(100vw + 150px), calc(-100vh - 150px)) rotate(48deg)';
                         }, 50);

                         setTimeout(() => {
                           window.location.href = '/projects/upendo';
                         }, 800);
                       } else {
                         setActivePreview(1);
                       }
                     }}
                  ></g>