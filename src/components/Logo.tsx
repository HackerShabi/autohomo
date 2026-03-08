export function Logo({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="25" r="15" stroke="currentColor" strokeWidth="4" />
            <path d="M 25,85 C 32,50 40,45 50,45 C 60,45 68,50 75,85 C 65,70 55,70 50,70 C 45,70 35,70 25,85 Z" fill="currentColor" />
        </svg>
    );
}
