---
title: "XR Training APK (Unity C# + Vuforia)"
slug: "xr-training-apk-unity"
summary: "Aplicación XR orientada a entrenamiento con Unity (C#) y Vuforia (opcional), enfocada en arquitectura modular y estabilidad para dispositivos tipo Quest."

links:
  repo: "https://github.com/andrewcas82/portfolio-astro"
  demo: "https://andrescasportafolio.vercel.app/projects/mobile-web-apps-flutter-python-js/"
  docs: "https://andrescasportafolio.vercel.app/"
# video: ""

role: "XR Developer / Software Engineer"
status: "active"
stack:
  - "Unity 6"
  - "C#"
  - "XR Interaction Toolkit"
  - "OpenXR"
  - "Unity Input System"
  - "Vuforia"
tags:
  - "XR"
  - "Unity"
  - "VR"
  - "AR"
  - "Training"
startDate: "2022-01"
endDate: "2025-01"

images:
  hero: "/images/projects/xr-training-apk-unity/hero.jpg"
  gallery: []
highlights:
  - "Arquitectura modular desacoplada (input vs movimiento)."
  - "Gestión de rig/cámara y viewpoints para entrenamiento."
  - "Preparado para evolución de demo a app productiva."
---

## Contexto
Sistema XR diseñado para entrenamiento, con foco en coherencia de cámara/rig, navegación por puntos (viewpoints) y una arquitectura mantenible.

## Problema
En aplicaciones XR, la gestión de rig/cámara y la interacción puede degradarse rápidamente por acoplamiento de input, rotación (yaw) y movimiento, afectando estabilidad y mantenimiento.

## Solución
- Implementación basada en módulos XR desacoplados.
- Coordinación mediante un orquestador y componentes especializados (rig follow, yaw alignment, input routing, view switching, constraints).
- Integración opcional con Vuforia para tracking por targets.

## Resultados
- Estabilidad superior del comportamiento del rig/cámara.
- Mejor mantenibilidad para escalar a aplicación productiva.
- Base sólida para QA y extensión de funcionalidades.

## Qué aprendí / enfoque
- Mantener input desacoplado de lógica de movimiento reduce bugs y facilita testing.
- La rotación yaw requiere control explícito en XR para evitar herencias no deseadas.

## Próximos pasos
- Agregar métricas (tiempo por escenario, completion rate).
- Fortalecer QA (Quest + editor workflows).
- Documentación técnica y checklist de release.
