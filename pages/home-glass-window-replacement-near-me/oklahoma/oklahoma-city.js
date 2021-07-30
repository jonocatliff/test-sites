
    import About from '../../../components/About';
    import Approach from '../../../components/Approach';
    import FAQ from '../../../components/FAQ';
    import Header from '../../../components/Header';
    import Intro from '../../../components/Intro';
    import Navigationbar from '../../../components/Navigationbar';
    import Savings from '../../../components/Savings';
    import Services from '../../../components/Services';
    import Testimonial from '../../../components/Testimonial';
    import Link from 'next/link';
    import CTABottom from '../../../components/CTABottom';
    import Footer from '../../../components/Footer';
    import Meta from '../../../partials/seo';
    
    
    export default function Home(props) {
        return (
        <div>
            <Meta 
            title="Oklahoma City home glass window replacement near me | We'll Take Care Of Everything" 
            desc="Oklahoma City home glass window replacement near me:   r"
            canonical={`${props.website}/oklahoma-city-home-glass-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City home glass window replacement near me" //KW
            />
            <Header
            title="Oklahoma City home glass window replacement near me" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a i"
            image="/window-installations.jpg"
            alt="Oklahoma City home glass window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oklahoma City home glass window replacement near me" //KW
            desc="e a i  "
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="r"
            cardDesc3="a"
            />
            <Approach
            title="Oklahoma City home glass window replacement near me" //KW
            desc="r   w w"
            />
            <Intro
            subtitle="Exceptional Oklahoma City home glass window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e l"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="t"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        