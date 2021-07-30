
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
            title="Oklahoma City pruning hedges | We'll Take Care Of Everything" 
            desc="Oklahoma City pruning hedges: a s"
            canonical={`${props.website}/oklahoma-city-pruning-hedges`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City pruning hedges" //KW
            />
            <Header
            title="Oklahoma City pruning hedges" //KW
            subtitle="a s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="f m"
            image="/window-installations.jpg"
            alt="Oklahoma City pruning hedges"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oklahoma City pruning hedges" //KW
            desc="s i c undefined"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="o"
            cardDesc3="w"
            />
            <Approach
            title="Oklahoma City pruning hedges" //KW
            desc="r t O y"
            />
            <Intro
            subtitle="Exceptional Oklahoma City pruning hedges" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="p undefined"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="c"
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
        