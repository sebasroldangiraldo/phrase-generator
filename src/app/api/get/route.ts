import { NextResponse } from "next/server";


export async function GET(_request: Request) {

    const subjects: string[] = ["The dog", "The turtle", "My friend", "Sebastian"];
    const predicates: string[] = ["runs fast", "is very wise", "loves coding", "sings poorly", 'hates coding'];

    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const predicate = predicates[Math.floor(Math.random() * predicates.length)];

    let phrase = `${subject} ${predicate}`;

    if (subject.length > 8) {
        phrase = `${subject} intelligent ${predicate}`
    };

    if (predicate.includes('coding')) {
        phrase = `${subject} ${predicate}!`
    };

    return NextResponse.json({
        phrase
    });
}