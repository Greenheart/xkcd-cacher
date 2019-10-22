const express = require('express')
const { Client } = require('pg')
const pug = require('pug')

const PORT = process.env.PORT || 3000

const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
})

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
    res.render('index', { comics: ALL_COMICS })
})

app.get('/ping', async (req, res) => {
    const database = await client
        .query('SELECT NOW()')
        .then(res => res || 'online')
        .catch(() => 'Postgres failed to connect')

    res.send({
        environment: process.env.NODE_ENV,
        database
    })

    client.end()
})
;(async () => {
    await client.connect()

    app.listen(PORT, () => {
        console.log('Node app started at http://localhost:%d', PORT)
    })
})()

const ALL_COMICS = [
    {
        month: '7',
        num: 124,
        link: '',
        year: '2006',
        news: '',
        safe_title: 'Blogofractal',
        transcript:
            "From the makers of the Blogosphere, Blogocube, and Blogodrome comes\nthe Blogofractal\n[[A large rectangle subdivided into rectangles in a fractal pattern, most with a phrase or word inside]]\n[[Mostly left to right from top-left corner]]\nTripMaster Monkey says\n118th Post!!\nWikiconstitution!\nOMG\nDeCSS\nCasemod your Boyfriend!!\nFLICKR\nThey're saying on Kos that\nhttp:\nslashdot.org\narticl\ntagCloud\nCory Doctorow is a little upset about copyright law.\nHey guys what if Google is evil?!?\nI'll sleep with you for a FreeIpods deal.\nFirstPsot!!\nSnakes on an I don't Even Care Anymore\nKiwiWiki\nCSS\nComments (0)\nBlogotesseract\n\u00c2\u00a1play games!\n[[RSS icon]]\nis AYB retro yet?\nGoogle Google Google Apple Google Goog\nCheney totally shot a dude!!!\nWatch this doddler get owned by a squirrel!!!\nDevelopers\nDevelopers\nDevelopers\nDevelopers\nI installed a Mac Mini inside ANOTHER Mac Mini!\nCheck out this vid of Jon Stewart\n9-11 <-> Trent Lott!\nWeb 7.1\nKryptonite\u00e2\u0084\u00a2 locks vulnerable to \"keys!\"\nInteresting post!  Check out my blog, it has useful info on CARBON MONOXIDE LITIGATION\nFIREFLY!!\nHELP ME\nEngadget\nBoing Boing\nGizmodo\nMAKE Blog: DIY baby\nMy friend has a band!!\nJon released an exploit in the protocol for meeting girls.\nInternets!\nHoward Dean?\nSo I hear there's a hurricane.\nWe should elect this dude!\nGoogle Maps is da best!!\nModeration:  +1 Sassy\nRSS!\nA-list\n<3\nTrackable URL?\nI shot a man in Reno check it out on YouTube!\nHEY LOOK ROBOTS!\nNet Neutrality!\nFriends Only.\nDupe!\nAJAX?\nCOMPLY\nCowboy Neal\nBlogodrome\nHey look I got Linux running on my tonsils!\nLook alive, blogonauts!\nCafepress cockrings\nBOOBIES!!\nMIA\nA Beowulf Cluster... of BLOGS!!\nSPOILER ALERT\nDupe!\nYou have been eaten by a Grue.\nRuby on a monorail\nLesbians!\nDNF Released!\nSteampunk\nBLAG\nPONIES!\nXeni found some porn!\nIRONY\nLIARS!\nLinux on Rails!\nBlogocube\ndel.icio.us!\n404\no.O\nDon't slam the source when you close it.\n{{title text: Edward Tufte's 'The Visual Display of Quantitative Information' is a fantastic book, and should be required reading for anyone in either the sciences or graphic design.}}",
        alt:
            "Edward Tufte's 'The Visual Display of Quantitative Information' is a fantastic book, and should be required reading for anyone in either the sciences or graphic design.",
        img: 'https://imgs.xkcd.com/comics/blogofractal.png',
        title: 'Blogofractal',
        day: '5'
    },
    {
        month: '12',
        num: 1934,
        link: '',
        year: '2017',
        news: '',
        safe_title: 'Phone Security',
        transcript: '',
        alt:
            '...wait until they type in payment information, then use it to order yourself a replacement phone.',
        img: 'https://imgs.xkcd.com/comics/phone_security.png',
        title: 'Phone Security',
        day: '27'
    },
    {
        month: '3',
        num: 1337,
        link: '',
        year: '2014',
        news: '',
        safe_title: 'Hack',
        transcript:
            "[[A white-on-black drawing of the ISEE-3\nICE probe.]]\nThe ISEE-3\nICE probe was launched in 1978. Its mission ended in 1997 and it was sent a shutdown signal.\n\n[[Back to black-on-white text.]]\nIn 2008, we learned--to our surprise--that the probe didn't shut down. It's still running and it has plenty of fuel. ...and in 2014, its orbit brings it near Earth.\n\n[[Two figures talking.]]\nFigure 1: We could sent it on a new mission... except we no longer have the equipment to send commands to it.\nFigure 2: Can't we-\n\n[[Camera frame closes in slightly on the first figure.]]\nFigure 1: NASA won't rebuild it. \"Too expensive.\"\nFigure 2: Seriously?\nFigure 2: I know, right? So the internet found the specs and we went to work.\n\n[[Camera zooms out as the two figures walk through an area with two other figures seated at desks working on laptops; one of the seated figures is wearing a headset.]]\nFigure 1: We've convinced them to give us time on the Madrid DSN transmitter and hacked the maser to support the uplink. And today's the big day.\n\n[[Camera focuses on the figure with the headset.]]\nHeadset Operator 1: Transmitting... We have a signal! We have control!\n\n[[Camera flips back to the first figure.]]\nFigure 1: Okay, transmit the new comet rendezvous maneuver sequen-\nOff screen: What the hell?\n\n[[Camera zooms back out to show all four figures.]]\nHeadset Operator 1: My console went dead!\nOperator 2: Mine too!\nFigure 1: What's happening?\n\n[[Camera back to figure with headset, staring at screen.]]\nHeadset Operator 1: There's a new signal going out over the transmitter!\nFigure 1 (from offscreen): A bug?\nHeadset Operator 1: Someone else is in the system!\n\n[[Camera switches to the second operator.]]\nOperator 2: Kill the connection!\nHeadset Operator 1 (from offscreen): I can't find it!\nOperator 2: They're firing the probe's engines!\nHeadset Operator 1 (from offscreen): No!!\n\n[[Camera switches back to the headset operator.]]\nFigure 1 (from offscreen): Who's doing this?? Stop them!\nOperator 2 (from offscreen): I'm trying!\nHeadset Operator 1: Look! My screen!\n\n[[The camera zooms back to show all of them, and a message is being shown on the headset operator's screen, in red.]]\nM-E-S-S-W-I-T-H-T-H-E-B-E-S-T\nD-I-E-L-I-K-E-T-H-E-R-E-S-T\n\n[[Camera cuts to a pool with two figures in it.]]\n\n[[Camera zooms out to show that the pool is on the roof of a downtown building. We see the figures' speech coming from it.]]\nBurn: Crash?\nCrash: Yeah, Burn?\n\n[[Same skyline view.]]\nBurn: Make a wish.\n\n[[A meteor passes through the sky above the city skyline.]]\n\n{{Title text: HACK THE STARS}}",
        alt: 'HACK THE STARS',
        img: 'https://imgs.xkcd.com/comics/hack.png',
        title: 'Hack',
        day: '3'
    },
    {
        month: '7',
        num: 123,
        link: '',
        year: '2006',
        news: '',
        safe_title: 'Centrifugal Force',
        transcript:
            "[[ Bond is tied to a giant centrifuge ]]\nHat Guy: Do you like my centrifuge, Mister Bond? When I throw the lever, you will feel centrifugal force crush every bone in your body.\nMr. Bond: You mean centripetal force. There's no such thing as centrifugal force.\nHat Guy: A laughable claim, Mister Bond, perpetuated by overzealous teachers of science. Simply construct Newton's laws into a rotating system and you will see a centrifugal force term appear as plain as day.\nMr. Bond: Come now, do you really expect me to do coordinate substitution in my head while strapped to a centrifuge?\nHat Guy: No, Mr. Bond. I expect you to die.\n{{ alt: You spin me right round, baby, right round, in a manner depriving me of an inertial reference frame.  Baby. }}",
        alt:
            'You spin me right round, baby, right round, in a manner depriving me of an inertial reference frame.  Baby.',
        img: 'https://imgs.xkcd.com/comics/centrifugal_force.png',
        title: 'Centrifugal Force',
        day: '3'
    },
    {
        month: '7',
        num: 134,
        link: '',
        year: '2006',
        news: '',
        safe_title: 'Myspace',
        transcript:
            "[[Computer screen showing a myspace page]]\nOh man, you and everyone in earshot are gonna LOVE the first five seconds of this song!\n{{alt: It's like they got together and said 'what do we miss most from the internet in 1998? that's right, embedded MIDI!'}}",
        alt:
            "It's like they got together and said 'what do we miss most from the internet in 1998?  that's right, embedded MIDI!'",
        img: 'https://imgs.xkcd.com/comics/myspace.png',
        title: 'Myspace',
        day: '28'
    },
    {
        month: '7',
        num: 135,
        link: '',
        year: '2006',
        news: '',
        safe_title: 'Substitute',
        transcript:
            "[[In a class room, the board says \"Math\" on the top-left corner, and \"Mr. Munroe\" in the middle. A stick figure is standing in front of it, speaking to the class.]]\nTeacher: Miss Lenhart couldn't be here today, so she asked me to substitute.\nTeacher: I've put out your test. Please get started.\n[[A student in the first row raises the exam paper and says.]]\nStudent: Mr. Munroe, Miss Lenhardt never taught us this.\nTeacher: That's because Miss Lenhart doesn't understand how important certain kinds of math are.\nStudent: But this just looks --\nTeacher: This material is more vital than anything you've ever learned\nStudent: But --\nTeacher: No buts.\nTeacher: This is a matter of life and death.\n[[Excerpt from the exam paper.]]\nName: _________\n[[A stick figure is standing, hands over head. A velociraptor is running towards it.]]\n1. The velociraptor spots you 40 meters away and attacks, accelerateing at 4 m\ns^2 to its top speed of 25 m\ns. When it spots you, you begin to flee, quickly reaching yourtop speed of 6 m\ns. How far can you get before you're caught and devoured?\n2. You're at the center of a 20m equilateral triangle with a raptor at each corner. The top raptor has a wounded leg and is limited to a top speed of 10 m\ns.\n[[A stick figure is shown in the above situation. The picture has a legend \"(Not to scale)\".]]\nThe raptors will run toward you. At what angle should you run to maximize the time you stay alive?\n3. Raptors can open doors, but they are slowed by them. Using the floor plan on the next page, plot a route through the building, assuming raptors take 5 minutes to open the first door and halve the time for each subsequent door. Remember, raptors run at 10 m\ns and they do not know fear.\n{{alt text: YOU THINK THIS IS FUNNY?}}",
        alt: 'YOU THINK THIS IS FUNNY?',
        img: 'https://imgs.xkcd.com/comics/substitute.png',
        title: 'Substitute',
        day: '31'
    }
]

// TODO: setup express server
// TODO: connect to postgres
// TODO: add two endpoints to turn comics from Postgres into basic HTML page:
// 1. get specific comic with num
// 2. get all comics

// TODO: show comics:

// return image, with alt text
// return h1 with title
// return description
// return time and date
// add any link if it exists

// If all should be returned, simply loop through responses.
