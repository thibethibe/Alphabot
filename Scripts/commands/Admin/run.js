const config = {
    name: "run",
    aliases: ["eval", "execute", "exec"],
    permissions: [2],
    description: "Run bot scripts",
    usage: "<script>",
    credits: "SINGU-💌💌",
    isAbsolute: true
}

function Running({ message, args }) {
    eval(args.join(" "));
    message.send("Done!");
}

export default {
    config,
    Running
}
