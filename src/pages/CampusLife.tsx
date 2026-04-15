import { Link } from "react-router-dom";

const CampusLife = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <img 
        src="https://i.namu.wiki/i/8ZHbsamYu2HUzcPOjQgr_zXMjxZAChQzWUa1STf6wUFZ7jD-OKI7LNk4juSTDS7jZRjxOel9z8UbjTaVVhZoa937BUw1mvbxWiHitcC_Ix0FNw4XgM_mIzIxpocNY6gzCWsKYqSjK1sv7Epo_UNe0g.webp" 
        alt="University students on campus" 
        className="w-full h-56 object-cover rounded-xl mb-10"
      />

      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Campus Life
        </h1>
        
        <p className="text-foreground mb-8 leading-relaxed">
          Korean universities offer a rich campus experience beyond academics. Getting involved 
          in campus life will help you make friends, improve your Korean, and create lasting 
          memories during your time as an international student.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Student Clubs and Organizations
          </h2>
          <p className="text-foreground mb-4 leading-relaxed">
            Most Korean universities have hundreds of student clubs (called "동아리" or dongari) 
            covering everything from sports and music to academics and volunteering. Joining a 
            club is one of the best ways to meet Korean students and practice the language.
          </p>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>Club recruitment usually happens at the beginning of each semester</li>
            <li>Look for clubs with "international" or "English" in their names if you want bilingual environments</li>
            <li>Club activities often include regular meetings, events, and MT (membership training trips)</li>
            <li>Some clubs may have membership fees or require auditions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Campus Facilities
          </h2>
          <p className="text-foreground mb-4 leading-relaxed">
            Take advantage of the facilities your tuition covers:
          </p>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>Library — Often open late or 24/7 during exam periods</li>
            <li>Gym and sports facilities — Usually free or very affordable for students</li>
            <li>Student cafeterias — Subsidized meals at reasonable prices</li>
            <li>Computer labs — Available for students without personal laptops</li>
            <li>Health center — Basic medical care and counseling services</li>
            <li>Career center — Resume help, job postings, and internship opportunities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Academic Culture
          </h2>
          <p className="text-foreground mb-4 leading-relaxed">
            Korean academic culture may differ from what you're used to:
          </p>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>Attendance is strictly monitored and affects your grade</li>
            <li>Group projects are very common — be prepared to collaborate</li>
            <li>Professors are addressed with formal titles (교수님 / Gyosunim)</li>
            <li>Office hours may be less common — email professors to schedule meetings</li>
            <li>Exam periods are intense — libraries are packed and study cafes fill up</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Campus Events
          </h2>
          <p className="text-foreground leading-relaxed">
            Korean universities host major festivals each year, usually in spring and fall. These 
            festivals feature concerts with popular K-pop artists, food stalls, performances, and 
            activities. It's a highlight of campus life that you shouldn't miss.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Making Friends
          </h2>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>Introduce yourself to classmates — Koreans appreciate friendly foreigners</li>
            <li>Join language exchange programs to practice Korean while helping others with English</li>
            <li>Accept invitations to meals and social gatherings</li>
            <li>Participate in your department's orientation and social events</li>
            <li>Be patient — friendships in Korea often develop slowly but become very deep</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Part-Time Jobs
          </h2>
          <p className="text-foreground leading-relaxed">
            International students on D-2 visas can work part-time (up to 20 hours per week during 
            semesters) after obtaining permission from immigration. Common jobs include tutoring, 
            working at cafes, or teaching English. Your university's career center can help you 
            find opportunities.
          </p>
        </section>
      </div>

    </div>
  );
};

export default CampusLife;