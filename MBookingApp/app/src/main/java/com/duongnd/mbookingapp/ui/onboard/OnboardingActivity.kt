package com.duongnd.mbookingapp.ui.onboard

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.duongnd.mbookingapp.databinding.ActivityOnboardingBinding
import com.duongnd.mbookingapp.ui.auth.ChooseLanguageFragment

class OnboardingActivity : AppCompatActivity() {

    private var _binding: ActivityOnboardingBinding? = null
    private val binding get() = _binding!!

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        _binding = ActivityOnboardingBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.txtChooseLanguage.setOnClickListener {
            ChooseLanguageFragment().show(supportFragmentManager, "ChooseLanguageFragment")
        }
    }
}