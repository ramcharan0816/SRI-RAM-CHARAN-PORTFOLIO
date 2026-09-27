'use client';

import { useEffect } from 'react';

const HEADER_HTML = `<header class="nav">
  <div class="nav-inner">
    <a class="nav-mark" href="#top">Sri Ram Charan</a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">Menu</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#credentials">Credentials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</header>`;

const MAIN_HTML = `<main id="top">

  <section class="hero" style="border-top:none;">
    <div class="wrap hero-inner">
      <div class="hero-text">
        <span class="eyebrow">AI / ML Engineer · Python Developer</span>
        <h1 class="name">Sri Ram&nbsp;Charan</h1>
        <p class="role">Building models that turn data into decisions</p>
        <p class="hero-blurb">Final-year Computer Science (AI &amp; ML) student in Hyderabad, working hands-on with machine learning, deep learning and NLP — from fraud detection to sentiment analysis to stress-recognition systems — and shipping them as usable Python applications.</p>
        <div class="hero-cta">
          <a class="btn btn-solid" href="#projects">View projects</a>
          <a class="btn btn-ghost" href="https://github.com/ramcharan0816">GitHub ↗</a>
          <a class="btn btn-ghost" href="https://www.linkedin.com/in/ramcharan1608/">LinkedIn ↗</a>
        </div>
      </div>
      <div class="hero-photo-wrap">
        <div class="hero-photo-ring"></div>
        <img class="hero-photo" src="data:image/jpeg;base64,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" alt="Portrait of Sri Ram Charan">
      </div>
    </div>
  </section>

  <section id="about">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>About</h2>
        <p class="section-note">A short introduction, professionally speaking.</p>
      </div>
      <div class="about-grid reveal">
        <div class="about-copy">
          <p class="lede">A dedicated, detail-oriented engineer who believes good AI work is equal parts curiosity and discipline.</p>
          <p>I'm a final-year Computer Science Engineering student specialising in AI &amp; Machine Learning at Malla Reddy Engineering College, Hyderabad. I bring strong analytical thinking, a methodical approach to problem-solving, and a genuine enthusiasm for learning new tools and techniques as the field evolves.</p>
          <p>I take initiative readily, communicate clearly with teams, and hold myself to a high standard of accuracy and follow-through — qualities shaped by mentoring peers, contributing to industry internships, and consistently seeking out certifications to deepen my expertise. I'm looking to bring that same dependability and drive to a team solving meaningful problems with data.</p>
        </div>
        <dl class="facts">
          <div class="fact"><dt>Based in</dt><dd>Hyderabad, India</dd></div>
          <div class="fact"><dt>Studying</dt><dd>B.Tech CSE (AI &amp; ML), 2023–2027</dd></div>
          <div class="fact"><dt>Core strengths</dt><dd>Analytical thinking · Communication · Ownership</dd></div>
          <div class="fact"><dt>Currently seeking</dt><dd>AI/ML internships &amp; entry-level roles</dd></div>
        </dl>
      </div>
    </div>
  </section>

  <section id="skills">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Skills</h2>
        <p class="section-note">Tools I reach for most often.</p>
      </div>
      <div class="reveal">
        <div class="skill-row">
          <div class="skill-cat">Languages</div>
          <div class="pill-group">
            <span class="pill">Python</span><span class="pill">Java</span><span class="pill">C</span><span class="pill">JavaScript</span>
          </div>
        </div>
        <div class="skill-row">
          <div class="skill-cat">ML &amp; AI</div>
          <div class="pill-group">
            <span class="pill">Machine Learning</span><span class="pill">Deep Learning</span><span class="pill">NLP</span><span class="pill">Supervised Learning</span><span class="pill">Classification</span>
          </div>
        </div>
        <div class="skill-row">
          <div class="skill-cat">Libraries &amp; Frameworks</div>
          <div class="pill-group">
            <span class="pill">TensorFlow / Keras</span><span class="pill">Scikit-learn</span><span class="pill">NumPy</span><span class="pill">Pandas</span><span class="pill">NLTK</span><span class="pill">OpenCV</span><span class="pill">Django</span><span class="pill">Flask</span>
          </div>
        </div>
        <div class="skill-row">
          <div class="skill-cat">Data &amp; Web</div>
          <div class="pill-group">
            <span class="pill">MySQL</span><span class="pill">HTML5</span><span class="pill">CSS3</span><span class="pill">Responsive Design</span>
          </div>
        </div>
        <div class="skill-row">
          <div class="skill-cat">Tools &amp; Platforms</div>
          <div class="pill-group">
            <span class="pill">GitHub</span><span class="pill">Power BI</span><span class="pill">Jupyter Notebook</span><span class="pill">VS Code</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Projects</h2>
        <p class="section-note">A few things I've built end to end.</p>
      </div>

      <div class="reveal">
        <div class="project">
          <div class="project-top">
            <h3>Credit Card Fraud Detection System</h3>
            <span class="project-stack">Python · Scikit-learn · Machine Learning</span>
          </div>
          <div class="project-desc">
            <p>An intelligent detection system that flags fraudulent transactions from historical transaction data.</p>
            <ul>
              <li>Cleaned and pre-processed transaction records, applying resampling to resolve class imbalance</li>
              <li>Improved model readiness and reliability using classic ML techniques and libraries</li>
            </ul>
          </div>
        </div>

        <div class="project">
          <div class="project-top">
            <h3>Hotel Review Sentiment Analyzer</h3>
            <span class="project-stack">Python · NLTK · NLP · TF-IDF</span>
          </div>
          <div class="project-desc">
            <p>An NLP system that classifies hotel guest feedback as positive or negative.</p>
            <ul>
              <li>Applied TF-IDF vectorization with tokenization, stop-word removal and lemmatization</li>
              <li>Optimized feature extraction to improve classification performance</li>
            </ul>
          </div>
        </div>

        <div class="project">
          <div class="project-top">
            <h3>NeuroTrack AI — Stress Detection</h3>
            <span class="project-stack">Python · TensorFlow/Keras · CNN · OpenCV · Django</span>
          </div>
          <div class="project-desc">
            <p>A web application that predicts a user's stress level from facial expressions, via image or live webcam input.</p>
            <ul>
              <li>Trained a CNN deep-learning model on facial-expression data for stress prediction</li>
              <li>Built the app in Django, using OpenCV for image processing and Keras for inference</li>
            </ul>
          </div>
        </div>
      </div>

      <p class="reveal" style="margin-top:8px;"><a class="btn btn-ghost" href="https://github.com/ramcharan0816">See more on GitHub ↗</a></p>
    </div>
  </section>

  <section id="credentials">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Certifications</h2>
        <p class="section-note">Programs and internships completed.</p>
      </div>
      <div class="reveal">
        <div class="list-row">
          <div><div class="list-title">Azure AI Fundamentals</div><div class="list-sub">Microsoft — Certified</div></div>
          <div class="list-date">&nbsp;</div>
        </div>
        <div class="list-row">
          <div><div class="list-title">GenAI-Based Data Analytics Job Simulation</div><div class="list-sub">Deloitte</div></div>
          <div class="list-date">&nbsp;</div>
        </div>
        <div class="list-row">
          <div><div class="list-title">Data Analytics Job Simulation</div><div class="list-sub">Tata</div></div>
          <div class="list-date">&nbsp;</div>
        </div>
        <div class="list-row">
          <div><div class="list-title">Prompt Engineering for Generative AI</div><div class="list-sub">Columbia University</div></div>
          <div class="list-date">&nbsp;</div>
        </div>
        <div class="list-row">
          <div><div class="list-title">Python Development Workshop</div><div class="list-sub">Skilltimate</div></div>
          <div class="list-date">&nbsp;</div>
        </div>
        <div class="list-row">
          <div><div class="list-title">Data Visualization using Python</div><div class="list-sub">AiMR Edu LLP</div></div>
          <div class="list-date">&nbsp;</div>
        </div>
      </div>

      <div class="section-head reveal" style="margin-top:48px;">
        <h2>Experience</h2>
        <p class="section-note">Internships that took the theory into practice.</p>
      </div>
      <div class="reveal">
        <div class="list-row">
          <div><div class="list-title">MERN Stack Intern — HomelyHub Property Booking Platform</div><div class="list-sub">Emertxe, affiliated with NSDC &amp; ESSCI</div></div>
          <div class="list-date">Aug – Sep 2026</div>
        </div>
        <div class="list-row">
          <div><div class="list-title">Power BI Intern</div><div class="list-sub">Saiket Systems</div></div>
          <div class="list-date">Aug – Sep 2026</div>
        </div>
      </div>

      <div class="section-head reveal" style="margin-top:48px;">
        <h2>Education</h2>
      </div>
      <div class="reveal">
        <div class="list-row">
          <div><div class="list-title">B.Tech, Computer Science Engineering (AI &amp; ML)</div><div class="list-sub">Malla Reddy Engineering College, Hyderabad · Aggregate 74%</div></div>
          <div class="list-date">2023 – 2027</div>
        </div>
        <div class="list-row">
          <div><div class="list-title">Intermediate (MPC)</div><div class="list-sub">Narayana Junior College, Hyderabad · Score 96%</div></div>
          <div class="list-date">2021 – 2023</div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="wrap">
      <span class="eyebrow" style="color:#E8B08A;">Get in touch</span>
      <h2>Open to internships, ML roles, and interesting problems.</h2>
      <p class="section-note">Reach out directly — I usually reply within a day.</p>
      <div class="contact-links">
        <a href="mailto:sriramcharan1608@gmail.com" id="emailLink">sriramcharan1608@gmail.com</a>
        <span id="emailCopied" style="opacity:0; transition:opacity .3s ease; font-size:0.85rem;">Copied to clipboard</span>
        <a href="tel:+916303076518">+91 63030 76518</a>
        <a href="https://github.com/ramcharan0816">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/ramcharan1608/">LinkedIn ↗</a>
      </div>
      <div class="foot-meta">
        <span>Sri Ram Charan — Hyderabad, India</span>
        <span>Built with care</span>
      </div>
    </div>
  </section>

</main>`;

export default function Page() {
  useEffect(() => {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    const onToggleClick = () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    toggle.addEventListener('click', onToggleClick);

    const linkEls = links.querySelectorAll('a');
    const onLinkClick = () => links.classList.remove('open');
    linkEls.forEach((a) => a.addEventListener('click', onLinkClick));

    const revealEls = document.querySelectorAll('.reveal');
    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => io!.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('in'));
    }

    const emailLink = document.getElementById('emailLink');
    const emailCopied = document.getElementById('emailCopied');
    const onEmailClick = (e: Event) => {
      e.preventDefault();
      const address = 'sriramcharan1608@gmail.com';
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(address).catch(() => {});
      }
      if (emailCopied) {
        (emailCopied as HTMLElement).style.opacity = '1';
        setTimeout(() => {
          (emailCopied as HTMLElement).style.opacity = '0';
        }, 2200);
      }
      try {
        window.location.href = 'mailto:' + address;
      } catch {}
    };
    emailLink?.addEventListener('click', onEmailClick);

    return () => {
      toggle.removeEventListener('click', onToggleClick);
      linkEls.forEach((a) => a.removeEventListener('click', onLinkClick));
      io?.disconnect();
      emailLink?.removeEventListener('click', onEmailClick);
    };
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: HEADER_HTML }} />
      <div dangerouslySetInnerHTML={{ __html: MAIN_HTML }} />
    </>
  );
}
