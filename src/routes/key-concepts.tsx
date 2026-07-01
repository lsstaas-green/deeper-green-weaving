import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";

export const Route = createFileRoute("/key-concepts")({
  head: () => ({
    meta: [
      { title: "My Framework — Leonie Staas" },
      { name: "description", content: "Ideas that shaped my approach to personal and planetary healing." },
      { property: "og:title", content: "My Framework — Leonie Staas" },
      { property: "og:description", content: "Ideas that shaped my approach to personal and planetary healing." },
    ],
  }),
  component: KeyConceptsPage,
});

type Concept = {
  term: string;
  body: ReactNode;
  searchText: string;
  href?: string;
};

type Section = {
  title: string;
  subtitle: string;
  concepts: Concept[];
};

const SECTIONS: Section[] = [
  {
    title: "THE HUMAN CONDITION",
    subtitle: "Why so many of us are struggling",
    concepts: [
      {
        term: "Meaning Crisis",
        searchText:
          "The growing sense that modern life has lost its depth, coherence, and sense of purpose. Despite unprecedented material wealth and technological progress, many people report feeling isolated, anxious, spiritually adrift, and unsure what truly matters. The meaning crisis is not simply a psychological problem; it is a cultural one. When our lives become disconnected from community, nature, ritual, and a larger sense of belonging, suffering follows.",
        body: "The growing sense that modern life has lost its depth, coherence, and sense of purpose. Despite unprecedented material wealth and technological progress, many people report feeling isolated, anxious, spiritually adrift, and unsure what truly matters. The meaning crisis is not simply a psychological problem; it is a cultural one. When our lives become disconnected from community, nature, ritual, and a larger sense of belonging, suffering follows.",
      },
      {
        term: "Loneliness",
        searchText:
          "One of the defining conditions of modern life. We are more digitally connected than any generation before us, yet many people feel profoundly alone. Loneliness is not merely the absence of social contact; it is the absence of meaningful connection—with ourselves, with others, and with the wider living world. Reconnecting is not just emotionally nourishing; it is essential for our survival.",
        body: "One of the defining conditions of modern life. We are more digitally connected than any generation before us, yet many people feel profoundly alone. Loneliness is not merely the absence of social contact; it is the absence of meaningful connection—with ourselves, with others, and with the wider living world. Reconnecting is not just emotionally nourishing; it is essential for our survival.",
      },
      {
        term: "Anxiety",
        searchText:
          "One of the defining experiences of our time. While anxiety is often treated as an individual problem, it is also shaped by the conditions in which we live: uncertainty, information overload, social isolation, economic pressures, and ecological crisis. Understanding anxiety in this broader context allows us to move beyond symptom management and towards deeper forms of healing, connection, and belonging.",
        body: "One of the defining experiences of our time. While anxiety is often treated as an individual problem, it is also shaped by the conditions in which we live: uncertainty, information overload, social isolation, economic pressures, and ecological crisis. Understanding anxiety in this broader context allows us to move beyond symptom management and towards deeper forms of healing, connection, and belonging.",
      },
      {
        term: "Burnout",
        searchText:
          "More than simple exhaustion, burnout is what happens when our energy expenditure consistently exceeds our sources of nourishment. In a culture that rewards productivity, urgency, and constant striving, burnout has become widespread. Recovery requires more than rest. It often involves reconnecting with what truly matters to us and finding ways back into playfulness, ease, and joy—often through community and service.",
        body: "More than simple exhaustion, burnout is what happens when our energy expenditure consistently exceeds our sources of nourishment. In a culture that rewards productivity, urgency, and constant striving, burnout has become widespread. Recovery requires more than rest. It often involves reconnecting with what truly matters to us and finding ways back into playfulness, ease, and joy—often through community and service.",
      },
      {
        term: "Nervous System Health",
        searchText:
          "Many of us live in a state of chronic activation. Constant stimulation, uncertainty, information overload, and social pressures can leave the nervous system stuck in patterns of stress, vigilance, shutdown, or overwhelm. Healing often begins not with changing our thoughts, but with helping the body rediscover safety.",
        body: "Many of us live in a state of chronic activation. Constant stimulation, uncertainty, information overload, and social pressures can leave the nervous system stuck in patterns of stress, vigilance, shutdown, or overwhelm. Healing often begins not with changing our thoughts, but with helping the body rediscover safety.",
      },
      {
        term: "Belonging",
        searchText:
          "A fundamental human need that cannot be satisfied through achievement, consumption, or status. Belonging arises when we feel accepted, connected, and embedded within relationships that matter. At its deepest level, belonging extends beyond human communities to include our place within the wider web of life.",
        body: "A fundamental human need that cannot be satisfied through achievement, consumption, or status. Belonging arises when we feel accepted, connected, and embedded within relationships that matter. At its deepest level, belonging extends beyond human communities to include our place within the wider web of life.",
      },
      {
        term: "Presence",
        searchText:
          "A quality of awareness, inhabiting this moment with openness and curiosity. Presence is not the absence of thought, but the ability to meet our experience directly rather than becoming lost in stories about the past or future. In a culture dominated by distraction and urgency, cultivating presence is an act of care.",
        body: "A quality of awareness, inhabiting this moment with openness and curiosity. Presence is not the absence of thought, but the ability to meet our experience directly rather than becoming lost in stories about the past or future. In a culture dominated by distraction and urgency, cultivating presence is an act of care.",
      },
      {
        term: "Embodiment",
        searchText:
          "The experience of being fully present in and connected to one's body, one's sensory experience. Modern culture encourages us to live primarily in our heads—thinking, planning, analysing, and consuming information. Embodiment is the return to direct experience: sensation, breath, movement, emotion, intuition, and relationship. It is through the body that we experience both suffering and healing.",
        body: "The experience of being fully present in and connected to one's body, one's sensory experience. Modern culture encourages us to live primarily in our heads—thinking, planning, analysing, and consuming information. Embodiment is the return to direct experience: sensation, breath, movement, emotion, intuition, and relationship. It is through the body that we experience both suffering and healing.",
      },
    ],
  },
  {
    title: "UNDERSTANDING OUR TIME",
    subtitle: "Making sense of the world we inhabit",
    concepts: [
      {
        term: "The Climate Crisis",
        searchText:
          "The rapid disruption of Earth's climate system caused primarily by the burning of fossil fuels, deforestation, and industrial activity. Rising temperatures are driving more frequent heatwaves, droughts, floods, wildfires, ecosystem collapse, food insecurity, and human displacement across the globe. While the science is clear, the climate crisis is not only a technological challenge—at its root is a rupture in how we relate to the living world and to one another.",
        body: "The rapid disruption of Earth's climate system caused primarily by the burning of fossil fuels, deforestation, and industrial activity. Rising temperatures are driving more frequent heatwaves, droughts, floods, wildfires, ecosystem collapse, food insecurity, and human displacement across the globe. While the science is clear, the climate crisis is not only a technological challenge—at its root is a rupture in how we relate to the living world and to one another.",
      },
      {
        term: "Planetary Boundaries",
        searchText:
          "The scientific framework describing the biophysical limits of Earth's systems — climate, biodiversity, freshwater, land use, and more — beyond which we risk triggering abrupt and irreversible changes. As of 2025, humanity has crossed seven of the nine boundaries. This is not an abstract future risk. It is the context in which we are all already living: our home planet's life support systems are failing.",
        body: "The scientific framework describing the biophysical limits of Earth's systems — climate, biodiversity, freshwater, land use, and more — beyond which we risk triggering abrupt and irreversible changes. As of 2025, humanity has crossed seven of the nine boundaries. This is not an abstract future risk. It is the context in which we are all already living: our home planet's life support systems are failing.",
      },
      {
        term: "The Crisis of Disconnection",
        searchText:
          "My name for what the \"climate crisis\" really is. Environmental destruction, nature disconnection, and mental health decline are not three separate problems — they form a self-reinforcing cycle, each one deepening the others. We cannot solve the ecological crisis without addressing the psychological one, and we cannot truly heal ourselves without healing our relationship to the living world. This is the insight that changed everything about how I understand my work.",
        body: 'My name for what the "climate crisis" really is. Environmental destruction, nature disconnection, and mental health decline are not three separate problems — they form a self-reinforcing cycle, each one deepening the others. We cannot solve the ecological crisis without addressing the psychological one, and we cannot truly heal ourselves without healing our relationship to the living world. This is the insight that changed everything about how I understand my work.',
      },
      {
        term: "Societal Collapse",
        searchText:
          "The process — already underway — by which the systems and structures of industrial growth civilization are beginning to break down. This does not necessarily mean sudden catastrophe or human extinction, but it does mean that the 21st century will bring with it an enormous amount of change and hardship. Sitting with this reality, rather than fleeing into denial or despair, is one of the most important and difficult things we can do. It is also, paradoxically, where a great deal of meaning and clarity can be found, because it allows us to see that societal collapse is not only the natural consequence of the choices humans made, but also a much-needed episode in order for something better to emerge.",
        body: "The process — already underway — by which the systems and structures of industrial growth civilization are beginning to break down. This does not necessarily mean sudden catastrophe or human extinction, but it does mean that the 21st century will bring with it an enormous amount of change and hardship. Sitting with this reality, rather than fleeing into denial or despair, is one of the most important and difficult things we can do. It is also, paradoxically, where a great deal of meaning and clarity can be found, because it allows us to see that societal collapse is not only the natural consequence of the choices humans made, but also a much-needed episode in order for something better to emerge.",
      },
      {
        term: "The Metacrisis",
        searchText:
          "A term used to describe the way many of today's major crises—climate change, biodiversity loss, political polarisation, economic instability, declining trust, technological disruption, and mental health challenges—interact and reinforce one another. Rather than a single problem, the metacrisis is the pattern created by multiple interconnected crises unfolding simultaneously.",
        body: "A term used to describe the way many of today's major crises—climate change, biodiversity loss, political polarisation, economic instability, declining trust, technological disruption, and mental health challenges—interact and reinforce one another. Rather than a single problem, the metacrisis is the pattern created by multiple interconnected crises unfolding simultaneously.",
      },
      {
        term: "Collapse Literacy",
        searchText:
          "The capacity to look honestly at where our civilization is headed — not with paralysis or nihilism, but with clear eyes and an open heart. It is the delicate act of balancing our grief and anger with the stillness and wisdom of trusting the bigger picture. Collapse literacy means being able to hold the reality of what is unraveling while still showing up for what matters: relationships, beauty, meaningful work, and the seeding of better ways of living. It is not pessimism. It is a form of mature realism that makes genuine hope possible.",
        body: "The capacity to look honestly at where our civilization is headed — not with paralysis or nihilism, but with clear eyes and an open heart. It is the delicate act of balancing our grief and anger with the stillness and wisdom of trusting the bigger picture. Collapse literacy means being able to hold the reality of what is unraveling while still showing up for what matters: relationships, beauty, meaningful work, and the seeding of better ways of living. It is not pessimism. It is a form of mature realism that makes genuine hope possible.",
      },
    ],
  },
  {
    title: "RECONNECTION",
    subtitle: "Remembering who we are",
    concepts: [
      {
        term: "Reconnection",
        searchText:
          "The act of retrieving a sense of belonging to a greater whole, of seeing and feeling seen, hearing and feeling heard, and appreciating the myriad ways in which our lives are interwoven with the lives of others. Disconnection from our own inner worlds, from each other, and from the ecosystems we live in is at the root of both the ecological and mental health crises we face today. Reconnection is not a luxury or a spiritual detour — it is the most urgent and practical work of our time, and it has both outer and inner dimensions.",
        body: "The act of retrieving a sense of belonging to a greater whole, of seeing and feeling seen, hearing and feeling heard, and appreciating the myriad ways in which our lives are interwoven with the lives of others. Disconnection from our own inner worlds, from each other, and from the ecosystems we live in is at the root of both the ecological and mental health crises we face today. Reconnection is not a luxury or a spiritual detour — it is the most urgent and practical work of our time, and it has both outer and inner dimensions.",
      },
      {
        term: "Nature-Connectedness",
        searchText:
          "Our subjective sense of belonging to the natural world. It is distinct from knowing about nature, but feeling ourselves to be part of it. Research consistently links nature-connectedness to better mental and physical health and a deeper sense of meaning. And yet it is in freefall: urbanization, screen culture, and the \"extinction of experience\" mean that most people in industrialized societies are growing up without it. Restoring this felt sense of kinship with life is central to everything I do.",
        body: (
          <>
            Our subjective sense of belonging to the natural world. It is distinct from knowing{" "}
            <em className="not-italic font-serif">about</em> nature, but feeling ourselves to be part
            of it. Research consistently links nature-connectedness to better mental and physical
            health and a deeper sense of meaning. And yet it is in freefall: urbanization, screen
            culture, and the "extinction of experience" mean that most people in industrialized
            societies are growing up without it. Restoring this felt sense of kinship with life is
            central to everything I do.
          </>
        ),
      },
      {
        term: "Awe",
        searchText:
          "The profound feeling of encountering something vast that challenges our usual way of seeing the world. Awe can arise through nature, art, music, spiritual experience, scientific discovery, or authentic human connection. Research suggests it can increase wellbeing, reduce self-centredness, and deepen our sense of connection to others and the living world.",
        body: "The profound feeling of encountering something vast that challenges our usual way of seeing the world. Awe can arise through nature, art, music, spiritual experience, scientific discovery, or authentic human connection. Research suggests it can increase wellbeing, reduce self-centredness, and deepen our sense of connection to others and the living world.",
      },
      {
        term: "Eco-Dharma",
        searchText:
          "A Buddhist-rooted path for meeting the ecological crisis with presence, courage, and compassion. Eco-Dharma recognizes that the same forces of craving, ignorance, and separation that cause suffering in individual minds are also driving the destruction of our planet — and that the inner work of transmuting reactivity through awareness and the outer work of ecological healing are not two different projects, the former is the foundation for the latter. It offers practices for grieving wisely, acting without burning out, and finding meaning in uncertain times.",
        body: "A Buddhist-rooted path for meeting the ecological crisis with presence, courage, and compassion. Eco-Dharma recognizes that the same forces of craving, ignorance, and separation that cause suffering in individual minds are also driving the destruction of our planet — and that the inner work of transmuting reactivity through awareness and the outer work of ecological healing are not two different projects, the former is the foundation for the latter. It offers practices for grieving wisely, acting without burning out, and finding meaning in uncertain times.",
      },
    ],
  },
  {
    title: "MEETING REALITY WITH AN OPEN HEART",
    subtitle: "Emotional responses to a changing world",
    concepts: [
      {
        term: "Climate Emotions",
        searchText:
          "The full spectrum of feelings that arise when we honestly face what is happening to our world: grief, anxiety, rage, guilt, despair, numbness, and — when we learn how to hold these — awe, love, inspiration, and fierce hope. These emotions are not obstacles to establishing a fulfilling life in times of crisis, they are what can guide us there. The problem is not that we feel too much, but that our culture has given us almost no tools for moving through what we feel.",
        body: "The full spectrum of feelings that arise when we honestly face what is happening to our world: grief, anxiety, rage, guilt, despair, numbness, and — when we learn how to hold these — awe, love, inspiration, and fierce hope. These emotions are not obstacles to establishing a fulfilling life in times of crisis, they are what can guide us there. The problem is not that we feel too much, but that our culture has given us almost no tools for moving through what we feel.",
      },
      {
        term: "Ecological Grief",
        searchText:
          "The grief that arises in response to experienced or anticipated losses in the natural world. This may include the loss of species, ecosystems, landscapes, seasons, or hoped-for futures. Ecological grief is increasingly recognised as a normal and healthy response to environmental change. It is not a sign of weakness; it is an expression of love.",
        body: "The grief that arises in response to experienced or anticipated losses in the natural world. This may include the loss of species, ecosystems, landscapes, seasons, or hoped-for futures. Ecological grief is increasingly recognised as a normal and healthy response to environmental change. It is not a sign of weakness; it is an expression of love.",
      },
      {
        term: "Active Hope",
        searchText:
          "A practice, not a feeling. Developed by Joanna Macy and Chris Johnstone, Active Hope is the decision to act in alignment with our values regardless of the outcome — not because we are certain things will get better, but because integrity, love, and meaning do not require a guaranteed future, but are in themselves a guarantee of more fulfillment in life. It is the realization that there are infinite possible futures, and every little choice moves the needle. It is a hope that doesn't depend on optimism, but on tending to our sense of connection.",
        body: (
          <>
            A practice, not a feeling. Developed by Joanna Macy and Chris Johnstone,{" "}
            <a
              href="https://activehope.info/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-accent"
            >
              Active Hope
            </a>{" "}
            is the decision to act in alignment with our values regardless of the outcome — not because we are certain things will get better, but because integrity, love, and meaning do not require a guaranteed future, but are in themselves a guarantee of more fulfillment in life. It is the realization that there are infinite possible futures, and every little choice moves the needle. It is a hope that doesn't depend on optimism, but on tending to our sense of connection.
          </>
        ),

      },
      {
        term: "The Work That Reconnects",
        searchText:
          "A body of group work developed by eco-philosopher Joanna Macy, drawing on systems theory, deep ecology, and Buddhist thought. It guides participants through grief, gratitude, and a widened sense of identity — helping us experience ourselves not as isolated individuals facing an overwhelming crisis, but as part of a living system with its own intelligence and resilience. It is one of the most powerful tools I know for moving from despair to joy, lightness, and consistent action.",
        body: "A body of group work developed by eco-philosopher Joanna Macy, drawing on systems theory, deep ecology, and Buddhist thought. It guides participants through grief, gratitude, and a widened sense of identity — helping us experience ourselves not as isolated individuals facing an overwhelming crisis, but as part of a living system with its own intelligence and resilience. It is one of the most powerful tools I know for moving from despair to joy, lightness, and consistent action.",
      },
      {
        term: "The Great Turning",
        searchText:
          "Joanna Macy's term for the historic transition from an industrial growth society toward a life-sustaining civilisation. The Great Turning is not a single event but a long process of cultural, economic, ecological, and spiritual transformation. It invites us to see our era not only as a time of breakdown, but also as a time of possibility.",
        body: "Joanna Macy's term for the historic transition from an industrial growth society toward a life-sustaining civilisation. The Great Turning is not a single event but a long process of cultural, economic, ecological, and spiritual transformation. It invites us to see our era not only as a time of breakdown, but also as a time of possibility.",
      },
    ],
  },
  {
    title: "PATHWAYS OF HEALING AND TRANSFORMATION",
    subtitle: "From insight to action",
    concepts: [
      {
        term: "Psychedelic Healing",
        searchText:
          "The intentional use of psychedelic substances — such as psilocybin mushrooms, truffles, or ayahuasca — in a carefully held therapeutic or ceremonial context to support psychological healing, emotional processing, and expanded self-understanding. For some people, psychedelics can offer what years of conventional therapy could not: a felt, embodied experience of connection — to themselves, to others, and to the living world. Starting from this experience and building on it through wise integration, psychedelic healing can be profoundly transformative, and psychedelics can be one of our most powerful allies at times of so much pace, negativity, and pressure.",
        body: "The intentional use of psychedelic substances — such as psilocybin mushrooms, truffles, or ayahuasca — in a carefully held therapeutic or ceremonial context to support psychological healing, emotional processing, and expanded self-understanding. For some people, psychedelics can offer what years of conventional therapy could not: a felt, embodied experience of connection — to themselves, to others, and to the living world. Starting from this experience and building on it through wise integration, psychedelic healing can be profoundly transformative, and psychedelics can be one of our most powerful allies at times of so much pace, negativity, and pressure.",
      },
      {
        term: "Psychedelic Preparation",
        searchText:
          "The intentional process of mentally, emotionally, physically, spiritually, and relationally preparing for a psychedelic experience. Good preparation is not about controlling what will happen but about cultivating the capacity to meet whatever arises with openness and care. At its heart, preparation is a relational practice that helps create the conditions for safety, healing, and meaningful transformation.",
        body: "The intentional process of mentally, emotionally, physically, spiritually, and relationally preparing for a psychedelic experience. Good preparation is not about controlling what will happen but about cultivating the capacity to meet whatever arises with openness and care. At its heart, preparation is a relational practice that helps create the conditions for safety, healing, and meaningful transformation.",
      },
      {
        term: "Psychedelic Integration",
        searchText:
          "The ongoing process of weaving the insights, emotions, and experiences of a psychedelic journey into the fabric of everyday life. Integration is not merely understanding what happened during an experience; it is the gradual movement toward greater coherence between what we have learned and how we live. In its deepest sense, integration is complete when the psychedelic experience no longer stands apart from ordinary life, but is expressed through our relationships, values, choices, and actions.",
        body: "The ongoing process of weaving the insights, emotions, and experiences of a psychedelic journey into the fabric of everyday life. Integration is not merely understanding what happened during an experience; it is the gradual movement toward greater coherence between what we have learned and how we live. In its deepest sense, integration is complete when the psychedelic experience no longer stands apart from ordinary life, but is expressed through our relationships, values, choices, and actions.",
      },
      {
        term: "Behavior Change",
        searchText:
          "In climate policy, behavior change refers to the shifts in individual and collective consumption that data shows are essential to meeting climate goals — technology alone cannot get us there. But this framing misses something crucial: lasting change doesn't come from guilt, fear, or obligation. It comes from a genuine experience of connection — to the living world, to each other, and to something worth protecting. The most powerful driver of sustainable behavior is not information, but belonging.",
        body: "In climate policy, behavior change refers to the shifts in individual and collective consumption that data shows are essential to meeting climate goals — technology alone cannot get us there. But this framing misses something crucial: lasting change doesn't come from guilt, fear, or obligation. It comes from a genuine experience of connection — to the living world, to each other, and to something worth protecting. The most powerful driver of sustainable behavior is not information, but belonging.",
      },
      {
        term: "Regenerative Culture",
        searchText:
          "Ways of living, working, and organising that restore rather than deplete human and ecological systems. Regenerative culture seeks not merely to sustain what exists, but to create conditions in which life can thrive. It asks how we might contribute to the health of the communities and ecosystems of which we are a part.",
        body: "Ways of living, working, and organising that restore rather than deplete human and ecological systems. Regenerative culture seeks not merely to sustain what exists, but to create conditions in which life can thrive. It asks how we might contribute to the health of the communities and ecosystems of which we are a part.",
      },
      {
        term: "Mindfulness",
        searchText:
          "The practice of paying attention to present-moment experience with openness and non-judgment. Rather than trying to change what we feel, mindfulness helps us to develop acceptance, a place from which the most helpful reaction for us can arise. Research links mindfulness to reduced stress, improved wellbeing and empathy, and greater emotional resilience. Many wisdom traditions view it as a pathway to deeper insight and connection.",
        body: "The practice of paying attention to present-moment experience with openness and non-judgment. Rather than trying to change what we feel, mindfulness helps us to develop acceptance, a place from which the most helpful reaction for us can arise. Research links mindfulness to reduced stress, improved wellbeing and empathy, and greater emotional resilience. Many wisdom traditions view it as a pathway to deeper insight and connection.",
      },
      {
        term: "Meditation",
        searchText:
          "A broad family of practices that cultivate concentration, presence, and loving compassion. Found in many spiritual as well as secular traditions, meditation can help quietting our thought, deepen self-understanding, and strengthen our capacity to meet life's challenges with greater clarity and equanimity. At its heart, meditation is a practice of learning how to fully be with the lives we are living, and to do some in a moral way.",
        body: "A broad family of practices that cultivate concentration, presence, and loving compassion. Found in many spiritual as well as secular traditions, meditation can help quietting our thought, deepen self-understanding, and strengthen our capacity to meet life's challenges with greater clarity and equanimity. At its heart, meditation is a practice of learning how to fully be with the lives we are living, and to do some in a moral way.",
      },
      {
        term: "Somatic Healing",
        searchText:
          "An approach to healing that recognizes the body as the center of not only physical, but of emotional, psychological, and relational wellbeing. Somatic healing works with sensations, movement, breath, posture, and nervous system regulation to help process experiences that may not be accessible through thinking alone. It is based on the understanding that healing happens not only through insight, but through the felt experience of safety and connection.",
        body: "An approach to healing that recognizes the body as the center of not only physical, but of emotional, psychological, and relational wellbeing. Somatic healing works with sensations, movement, breath, posture, and nervous system regulation to help process experiences that may not be accessible through thinking alone. It is based on the understanding that healing happens not only through insight, but through the felt experience of safety and connection.",
      },
    ],
  },
];

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function KeyConceptsPage() {
  const [q, setQ] = useState("");

  const filteredSections = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return SECTIONS;

    return SECTIONS.map((section) => {
      const matchesSection =
        section.title.toLowerCase().includes(query) ||
        section.subtitle.toLowerCase().includes(query);

      if (matchesSection) return section;

      const concepts = section.concepts.filter(
        (c) =>
          c.term.toLowerCase().includes(query) ||
          c.searchText.toLowerCase().includes(query),
      );

      return concepts.length > 0 ? { ...section, concepts } : null;
    }).filter((s): s is Section => s !== null);
  }, [q]);

  const hasResults = filteredSections.length > 0;

  return (
    <div className="container-narrow py-20 md:py-28">
      <header className="max-w-2xl">
        <p className="eyebrow">Key concepts</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary">
          Ideas that shaped my approach.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I believe that full transparency about the concepts that have shaped us is an ethical
          imperative. While I commit to ontological openness, these ideas form the foundation to what I
          believe will create lasing positive change — in ourselves, and the wider world.
        </p>
      </header>

      <div className="mt-10 max-w-md">
        <label htmlFor="search" className="sr-only">
          Search concepts
        </label>
        <input
          id="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search a concept…"
          className="w-full rounded-full border border-border bg-card px-5 py-3 text-sm outline-none focus:border-primary"
        />
      </div>

      <div className="mt-12 space-y-16 md:space-y-24">
        {filteredSections.map((section) => (
          <section key={section.title} id={sectionId(section.title)} className="scroll-mt-24">
            <div className="border-b border-border pb-4">
              <h2 className="font-serif text-2xl md:text-3xl text-primary">
                {section.title}
              </h2>
            </div>

            <dl className="mt-8 divide-y divide-border border-y border-border">
              {section.concepts.map((c) => (
                <div
                  key={c.term}
                  className="grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-12"
                >
                  <dt className="font-serif text-2xl text-primary">{c.term}</dt>
                  <dd className="text-foreground/85 leading-relaxed">
                    {c.body}
                    {c.href && (
                      <>
                        {" "}
                        <a
                          href={c.href}
                          className="text-accent underline-offset-4 hover:underline"
                        >
                          Further reading →
                        </a>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}

        {!hasResults && (
          <p className="py-10 text-sm text-muted-foreground">
            No concepts match that search.
          </p>
        )}
      </div>
    </div>
  );
}
