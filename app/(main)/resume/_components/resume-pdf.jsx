import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

// Define styling for PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
  },
  header: {
    paddingBottom: 18, // add gap below contact + name block
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 4, // gap between name + contact
  },
  contact: {
    textAlign: "center",
    fontSize: 10,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    marginTop: 12,
    borderBottom: "1px solid #000",
    paddingBottom: 3,
  },
  roleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: 600,
    marginTop: 6,
  },
  bullet: {
    marginLeft: 8,
    marginTop: 2,
  },
});

const ResumePDF = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* NAME */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.contact}>
            {[
              data.email,
              data.mobile,
              data.linkedin && "LinkedIn",
              data.twitter && "Twitter",
            ]
              .filter(Boolean)
              .join(" | ")}
          </Text>

          {/* Spacer using Text (always works) */}
          <Text style={{ fontSize: 6 }}>{"\n"}</Text>
        </View>
        {/* SUMMARY */}
        {data.summary && (
          <>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text>{data.summary}</Text>
          </>
        )}
        {/* SKILLS */}
        {data.skills && (
          <>
            <Text style={styles.sectionTitle}>Skills</Text>
            {data.skills.split("\n").map((skill, i) => (
              <Text key={i} style={styles.bullet}>
                • {skill}
              </Text>
            ))}
          </>
        )}
        {/* EXPERIENCE */}
        {data.experience?.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {data.experience.map((job, i) => (
              <View key={i}>
                <View style={styles.roleRow}>
                  <Text>
                    {job.title} @ {job.organization}
                  </Text>
                  <Text>
                    {job.current
                      ? `${job.startDate} - Present`
                      : `${job.startDate} - ${job.endDate}`}
                  </Text>
                </View>
                {job.description?.split("\n").map((line, j) => (
                  <Text key={j} style={styles.bullet}>
                    • {line}
                  </Text>
                ))}
              </View>
            ))}
          </>
        )}
        {/* EDUCATION */}
        {data.education?.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, i) => (
              <View key={i}>
                <View style={styles.roleRow}>
                  <Text>
                    {edu.title} @ {edu.organization}
                  </Text>
                  <Text>
                    {edu.current
                      ? `${edu.startDate} - Present`
                      : `${edu.startDate} - ${edu.endDate}`}
                  </Text>
                </View>
                {edu.description?.split("\n").map((line, j) => (
                  <Text key={j} style={styles.bullet}>
                    • {line}
                  </Text>
                ))}
              </View>
            ))}
          </>
        )}
        {/* PROJECTS */}
        {data.projects?.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Projects</Text>
            {data.projects.map((proj, i) => (
              <View key={i}>
                <View style={styles.roleRow}>
                  <Text>
                    {proj.title} @ {proj.organization}
                  </Text>
                  <Text>
                    {proj.current
                      ? `${proj.startDate} - Present`
                      : `${proj.startDate} - ${proj.endDate}`}
                  </Text>
                </View>
                {proj.description?.split("\n").map((line, j) => (
                  <Text key={j} style={styles.bullet}>
                    • {line}
                  </Text>
                ))}
              </View>
            ))}
          </>
        )}
      </Page>
    </Document>
  );
};

export default ResumePDF;
