import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (GA_MEASUREMENT_ID && !initialized) {
            ReactGA.initialize(GA_MEASUREMENT_ID);
            setInitialized(true);
            console.log('GA4 Initialized');
        }
    }, [initialized]);

    useEffect(() => {
        if (initialized) {
            ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
        }
    }, [initialized, location]);

    return <>{children}</>;
}
