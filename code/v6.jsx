   <div className="relative h-[500px] mt-32 -ml-20">
            <svg className="w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0, 100)">
                <path
                  id="path-1-2"
                  d="M115,40 L580,300"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-paars"
                />
                <path
                  id="path-2-3"
                  d="M580,300 L900,100"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-paars"
                />
                <path
                  id="path-3-4"
                  d="M900,100 L1200,300"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-paars"
                />
                <path
                  id="path-4-5"
                  d="M1200,300 L1400,100"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-paars"
                />
                
                <image
                  id="square-1-2"
                  href="/images/raketje.png"
                  width="32"
                  height="32"
                  className="opacity-0"
                  x="115"
                  y="40"
                  transform="rotate(120, 115, 40)"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    begin="project2.mouseenter; project2.mouseenter+5s"
                    repeatCount="1"
                    fill="remove"
                  />
                  <animateMotion
                    dur="2s"
                    path="M0,0 L465,260"
                    begin="project2.mouseenter; project2.mouseenter+5s"
                    repeatCount="1"
                    fill="remove"
                  />
                </image>

                <image
                  id="square-2-3"
                  href="/images/raketje.png"
                  width="32"
                  height="32"
                  className="opacity-0"
                  x="580"
                  y="300"
                  transform="rotate(45, 580, 300)"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    begin="project3.mouseenter"
                    fill="remove"
                  />
                  <animateMotion
                    dur="2s"
                    path="M0,0 L320,-225"
                    begin="project3.mouseenter"
                    fill="remove"
                  />
                </image>

                <image
                  id="square-3-4"
                  href="/images/raketje.png"
                  width="32"
                  height="32"
                  className="opacity-0"
                  x="900"
                  y="100"
                  transform="rotate(120, 900, 100)"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    begin="project4.mouseenter"
                    fill="remove"
                  />
                  <animateMotion
                    dur="2s"
                    path="M0,0 L300,195"
                    begin="project4.mouseenter"
                    fill="remove"
                  />
                </image>

                <image
                  id="square-4-5"
                  href="/images/raketje.png"
                  width="32"
                  height="32"
                  className="opacity-0"
                  x="1200"
                  y="300"
                  transform="rotate(45, 1200, 300)"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2s"
                    begin="project5.mouseenter"
                    fill="remove"
                  />
                  <animateMotion
                    dur="2s"
                    path="M0,0 L200,-225"
                    begin="project5.mouseenter"
                    fill="remove"
                  />
                </image>