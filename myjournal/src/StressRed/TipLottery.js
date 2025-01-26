import React from 'react';
import { useState } from "react";

const TipLottery = () => {
    const [tip, setTip] = useState("");

    const stressTips = [
        "Take a deep breath and hold it for five seconds before exhaling.",
        "Go for a short walk and enjoy the fresh air.",
        "Stretch your arms, legs, and back to release tension.",
        "Drink a glass of water to refresh yourself.",
        "Write down three things you're grateful for today.",
        "Listen to your favorite calming music.",
        "Close your eyes and visualize a peaceful place.",
        "Do a quick five-minute meditation.",
        "Call or text a trusted friend or family member.",
        "Focus on your breathing for one minute.",
        "Spend time with a pet or look at cute animal pictures.",
        "Do a short workout or some jumping jacks.",
        "Declutter a small area like your desk or drawer.",
        "Try progressive muscle relaxation from head to toe.",
        "Spend five minutes journaling your thoughts.",
        "Take a warm shower or bath to relax your muscles.",
        "Read a few pages of a book you enjoy.",
        "Spend some time outside in nature.",
        "Practice gratitude by thanking someone in your life.",
        "Focus on completing one small, manageable task.",
        "Watch a short funny video to make yourself laugh.",
        "Light a candle or use a diffuser with soothing scents.",
        "Practice mindful eating with a healthy snack.",
        "Look through old photos that make you smile.",
        "Repeat a positive affirmation to yourself.",
        "Practice yoga or do a few basic poses.",
        "Write down what is stressing you out to clear your mind.",
        "Plan a small reward for yourself after completing a task.",
        "Take a break and sip a cup of tea or coffee.",
        "Set a timer and spend five minutes tidying up.",
        "Write down three positive things about yourself.",
        "Listen to a guided meditation or relaxation exercise.",
        "Turn off your phone for a few minutes to disconnect.",
        "Take a few deep belly breaths to calm your nervous system.",
        "Watch the clouds or stargaze for a few minutes.",
        "Spend time working on a hobby you love.",
        "Focus on one task at a time instead of multitasking.",
        "Write a short to-do list to organize your thoughts.",
        "Dance to your favorite upbeat song.",
        "Use a stress ball or fidget toy to release tension.",
        "Smile, even if you don’t feel like it—it can help.",
        "Declutter your inbox or organize your files.",
        "Read an inspirational quote or poem.",
        "Try coloring in an adult coloring book.",
        "Plant or water a plant to connect with nature.",
        "Write down a short-term goal you want to achieve.",
        "Visualize your favorite vacation spot for a minute.",
        "Take a short power nap to recharge your energy.",
        "Avoid caffeine and opt for herbal tea instead.",
        "Slowly count backward from 10 to 1.",
        "Turn on calming background music while you work.",
        "Write a letter to yourself offering encouragement.",
        "Say no to a task if you're feeling overwhelmed.",
        "Step outside and feel the sun or breeze on your skin.",
        "Focus on the present moment instead of worrying.",
        "Organize your workspace to feel more in control.",
        "Play with a pet or cuddle with a loved one.",
        "Compliment someone to spread positivity.",
        "Take a digital detox by staying off social media.",
        "Cook or bake something simple and comforting.",
        "Watch your favorite TV show or movie for a break.",
        "Visualize stress leaving your body as you exhale.",
        "Write down a positive mantra and repeat it to yourself.",
        "Try aromatherapy with lavender or peppermint oil.",
        "Doodle or draw something creative, even if it’s simple.",
        "Set a timer for five minutes and just relax.",
        "Plan an activity you look forward to doing soon.",
        "Drink a glass of water with lemon for a refreshing boost.",
        "Look at yourself in the mirror and smile.",
        "Write down your stressors and prioritize them.",
        "Spend time doing something kind for someone else.",
        "Do a crossword puzzle, Sudoku, or brain game.",
        "Plan your day tomorrow to feel more prepared.",
        "Clean a small area of your home for a sense of accomplishment.",
        "Try a deep breathing technique like box breathing.",
        "Listen to calming nature sounds or white noise.",
        "Take a moment to journal what you're feeling right now.",
        "Stretch your neck and shoulders to release tension.",
        "Spend time appreciating something beautiful around you.",
        "Write a list of things you can control and focus on those.",
        "Do something creative, like knitting, painting, or crafting.",
        "Treat yourself to a small comfort, like a cozy blanket.",
        "Focus on slowing down your exhalation when you breathe.",
        "Write down your stress in a letter, then tear it up.",
        "Break a big task into smaller, more manageable steps.",
        "Give yourself permission to take a break and relax.",
        "Think about a past achievement and how it made you feel.",
        "Make a cup of herbal tea and savor the process.",
        "Walk around the room or pace to release nervous energy.",
        "Remind yourself that it’s okay to not be perfect.",
        "Listen to an inspiring podcast or audiobook.",
        "Write a list of things that bring you joy.",
        "Close your eyes and focus on sounds around you.",
        "Pet an animal or hug a stuffed toy for comfort.",
        "Turn on a soft light or adjust your environment to feel cozier.",
        "Spend a moment thinking of a happy memory."
      ];

      const generateTip = () => {
        const randomIndex = Math.floor(Math.random() * stressTips.length);
        const randomTip = stressTips[randomIndex];
        setTip(randomTip);
      };


  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Stress Tip Generator</h1>
      <button onClick={generateTip} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Get a Stress Tip
      </button>
      {tip && (
        <p style={{ marginTop: "20px", fontSize: "18px", fontStyle: "italic" }}>
          {tip}
        </p>
      )}
    </div>
  )
}

export default TipLottery
