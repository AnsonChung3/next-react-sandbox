import Link from 'next/link';

export default function LinkPropsPage() {
    // this page is intentionally kept minimal to try out
    // the Link component provided by Next
    // according to docs, this is client side navigation
    // appearance wise, it shows up like normal text,
    // without the usual underline like a regular anchor tag
    return (
        <>
            <div>
                <h1>This is a props Page</h1>
                <Link href={'/initial-sandbox'}>
                    Take me to the initial-sandbox page!
                </Link>
            </div>
        </>
    );
}
