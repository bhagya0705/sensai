export function entriesToMarkdown(entries, type) {
  if (!entries?.length) return "";

  return (
    `## ${type}\n\n` +
    entries
      .map((entry) => {
        const dateRange = entry.current
          ? `${entry.startDate} - Present`
          : `${entry.startDate} - ${entry.endDate}`;

        const desc = entry.description
          ?.split("\n")
          .filter(Boolean)
          .map((line) => `• ${line.trim()}`)
          .join("\n");

        return `
<div style="display:flex; justify-content:space-between; font-weight:600; margin:0; padding:0;">
  <span>${entry.title} @ ${entry.organization}</span>
  <span>${dateRange}</span>
</div>

<div style="margin-bottom:18px;">
${desc}
</div>
        `.trim();
      })
      .join("\n\n") + `\n\n\n`   // <-- ensures next heading renders properly
  );
}


